const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()

const User = require("../model/userSchema")
require("../db/conn")
router.get("/get-data", (req, res) => {
  User.find().then((result) => {
    res.json({ result }).catch((err) => console.log(err))
  })
})

module.exports = router
