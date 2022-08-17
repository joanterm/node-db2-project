// DO YOUR MAGIC
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    console.log("works")
})

// router.get("/:id", (req, res) => {

// })

// router.post("/", (req, res) => {

// })

module.exports = router