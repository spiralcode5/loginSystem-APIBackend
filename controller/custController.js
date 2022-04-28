const custSchema = require("../DB/cust_DB");

exports.createCust = async (cust) => {
    try {
        const custs = await new custSchema(cust);
        const data = await custs.save();
        return {errors: false, data: data};
    } catch (error) {
        return {errors:true, message: error.message};
    }
};

exports.displayCust = async () => {
    try {
        const data = await custSchema.find();
        return {errors: false, data:data}
    } catch (error) {
        return {errors: true, message: error.message};
    }
};

exports.putCust = async (id, cust) => {
    try {
        const data = await custSchema.findByIdAndUpdate(id, cust, {new:true});
        return {errors: false, data:data};
    } catch (error) {
        return {errors: true, message: error.message};
    }
};

exports.deleteCust = async (id) => {
    try {
        await custSchema.findByIdAndDelete(id);
        return {errors: false, message: "Deleted Successfully"}
    } catch (error) {
        return {errors: true, message: error.message};
    }
}