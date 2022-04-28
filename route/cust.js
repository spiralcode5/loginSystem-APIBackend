const route = require("express").Router();
const {createCust, displayCust, putCust, deleteCust} = require("../controller/custController");

route.post("/insert1", async (req,res) => {
    try {
        const result = await createCust(req.body);
        if(result.errors){
            res.status(400).json({errors: true, message: result.message});
        }
        res.status(200).json({errors: false, data: result.data});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

route.get("/get1", async (req,res) => {
    try {
        const result = await displayCust();
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
        const result = await putCust(id,req.body);
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
        const result = await deleteCust(id);
        if(result.errors){
            res.status(400).json({errors: true, message: result.message});
        }
        res.status(200).json({errors: false, data: result.data});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

module.exports = route;