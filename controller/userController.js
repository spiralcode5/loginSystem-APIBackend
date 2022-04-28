const bcrypt = require("bcrypt");

const userSchema = require("../DB/user_DB");

exports.createUser = async (user) => {
    try {
        const emailExist = await userSchema.findOne({email: user.email});
        if(emailExist){
            return {errors: true, message: "Email already exists."}
        }
        let salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(user.password, salt);
        const users = await new userSchema(
            { 
                fname: user.fname,
                lname: user.lname,
                email: user.email,
                password: encryptedPassword
            });
        const data = await users.save();
        return {errors: false, data: data};
    } catch (error) {
        return {errors:true, message: error.message};
    }   
};

exports.displayUser = async () => {
    try {
        const data = await userSchema.find();
        return {errors: false, data:data}
    } catch (error) {
        return {errors: true, message: error.message};
    }
};

exports.putUser = async (id, user) => {
    try {
        const data = await userSchema.findByIdAndUpdate(id, user, {new:true});
        return {errors: false, data:data};
    } catch (error) {
        return {errors: true, message: error.message};
    }
};

exports.deleteUser = async (id) => {
    try {
        await userSchema.findByIdAndDelete(id);
        return {errors: false, message: "Deleted Successfully"}
    } catch (error) {
        return {errors: true, message: error.message};
    }
}