const express = require("express")
const router = express.Router()

router.use(express.json())
require("../db/conn")
const User = require("../model/userSchema")

router.get("/", (req, res) => {
  console.log("hi")
})

router.post("/find-donors", (req, res) => {
  const { name, group, phone, state, city } = req.body

  if (!name || !phone || !group || !state || !city) {
    return res.json({ error: "Please fill all the details" })
  }

  const user = new User({ name, group, phone, state, city })

  user
    .save()
    .then(() => {
      res.status(201).json({ message: "Successfully Stored" })
    })
    .catch((err) => res.status(500).json({ error: "Failed to store" }))
})

module.exports = router
