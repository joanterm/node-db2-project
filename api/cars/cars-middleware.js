const vinValidator = require('vin-validator');
const Cars = require("./cars-model")

const checkCarId = (req, res, next) => {
  Cars.getById(req.params.id)
  .then((result) => {
    if(result == null) {
        res.status(404).json({message: `car with id ${req.params.id} is not found`})
        return
    }
  req.checkedCarId = result
  next()
  })
}

const checkCarPayload = (req, res, next) => {
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
  req.checkedCarPayload = ({vin:req.body.vin, make:req.body.make, model:req.body.model, mileage:req.body.mileage, title:req.body.title, transmission:req.body.transmission})
  next()
}

const checkVinNumberValid = (req, res, next) => {
  const isValidVin = vinValidator.validate(req.body.vin)
    if(!isValidVin) {
      res.status(400).json({message: `vin ${req.body.vin} is invalid`})
      return
    }
    next()
}

const checkVinNumberUnique = (req, res, next) => {
  Cars.uniqueVin(req.body.vin)
    .then((result) => {
      if(result) {
        res.status(400).json({message: `vin ${req.body.vin} already exists` })
        return
      }
      next()
    })
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
