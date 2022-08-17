// DO YOUR MAGIC
const express = require("express")
const router = express.Router()
const Cars = require("./cars-model")


//GET
router.get("/", (req, res) => {
    Cars.getAll()
    .then((result) => {
        res.status(200).json(result)
    })
    .catch((err) => {
        console.log(err);        
    })
})

//GET BY ID
router.get("/:id", (req, res) => {
    Cars.getById(req.params.id)
    .then((result) => {
        if(result == null) {
            res.status(404).json({message: `car with id ${req.params.id} is not found`})
            return
        }
        res.status(200).json(result)
    })
    .catch((err) => {
        console.log(err);        
    })
})

//POST
router.post("/", (req, res) => {
    if(req.body.vin == null) {
        res.status(400).json({message: "vin is missing"})
        return
    }
    if(req.body.make == null) {
        res.status(400).json({message: "make is missing"})
        return
    }
    if(req.body.model == null) {
        res.status(400).json({message: "model is missing"})
        return
    }
    if(req.body.mileage == null) {
        res.status(400).json({message: "mileage is missing"})
        return 
    }
    Cars.create(req.body)
    .then((id) => {
        return Cars.getById(id.id)
    })
    .then((result) => {
        res.status(201).json(result)
    })
    .catch((err) => {
        console.log(err);        
    })
})



module.exports = router