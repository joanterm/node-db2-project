const db = require("../../data/db-config")

const getAll = () => {
  return db("cars")
}

const getById = (id) => {
  return db("cars")
    .where("id", id)
    .first()
}

const create = (cars) => {
  return db("cars")
    .insert(cars)
    .then((id) => {
      return getById(id[0])
    })
}

const uniqueVin = (vin) => {
  return db("cars")
    .where("vin", vin)
    .first()
}

module.exports = {
  getAll,
  getById,
  create,
  uniqueVin
}