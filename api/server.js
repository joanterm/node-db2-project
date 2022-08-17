const express = require("express")

const server = express()
server.use(express.json());

const router = require("./cars/cars-router")
server.use("/api/cars", router)

server.get("/", (req, res) => {
    res.send("Express is working correctly!")
})

module.exports = server
