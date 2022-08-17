// DO YOUR MAGIC
const express = require("express")
const router = express.Router()
const Cars = require("./cars-model")

router.get("/", (req, res) => {
    Cars.getAll()
    .then((result) => {
        res.status(200).json(result)
    })
    .catch((err) => {
        console.log(err);        
    })
})

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

// router.post("/", (req, res) => {

// })

module.exports = router