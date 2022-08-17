// DO YOUR MAGIC
const express = require("express")
const router = express.Router()
const Cars = require("./cars-model")
const {checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique} = require("./cars-middleware")

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
router.get("/:id", checkCarId, (req, res) => {
    res.status(200).json(req.checkedCarId)
    .catch((err) => {
        console.log(err);        
    })
})

//POST
router.post("/", checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res) => {
    Cars.create(req.checkedCarPayload)
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