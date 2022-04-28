const bcrypt = require("bcrypt");
const userSchema = require("../DB/user_DB");
const jwt = require("jsonwebtoken");  //json web token is imported

exports.login = async (user) => {
    try {
        const users = await userSchema.findOne({email: user.email});
        if(!users)
        {
            return {errors: true, message: "Invalid Email or Password"}
        }
        const passExist = await bcrypt.compare(user.password, users.password)
        if(!passExist)
        {
            return {errors: true, message: "Invalid Password"}
        }
        const token = await jwt.sign({_id: users._id}, process.env.SECRET)
        return {errors: false, data: {token: token, user: user}}
    } catch (error) {
        return {errors:true, message: error.message};
    }
}

