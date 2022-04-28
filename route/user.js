const route = require("express").Router();
const {createUser, displayUser, putUser, deleteUser} = require("../controller/userController");
const {login} = require("../controller/loginController");
const auth = require("../middleware/auth")

route.post("/insert", async (req,res) => {
    try {
        const result = await createUser(req.body);
        if(result.errors){
            res.status(400).json({errors: true, message: result.message});
        }
        res.status(200).json({errors: false, data: result.data});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

route.get("/get", auth, async (req,res) => {
    try {
        const result = await displayUser();
        if(result.errors){
            res.status(400).json({errors: true, message: result.message});
        }
        res.status(200).json({errors: false, data: result.data});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

route.put("/put/:id", async (req,res) => {
    try {
        const id = req.params.id;
        const result = await putUser(id,req.body);
        if(result.errors){
            res.status(400).json({errors: true, message: result.message});
        }
        res.status(200).json({errors: false, data: result.data});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

route.delete("/delete/:id", async (req,res) => {
    try {
        const id = req.params.id;
        const result = await deleteUser(id);
        if(result.errors){
            res.status(400).json({errors: true, message: result.message});
        }
        res.status(200).json({errors: false, data: result.data});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

//login controller
route.post("/insertuser", async (req,res) => {
    try {
        const result = await login(req.body);
        if(result.errors){
            res.status(400).json({errors: true, message: result.message});
        }
        res.status(200).json({errors: false, data: result.data});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

module.exports = route;