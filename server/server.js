const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()

//app

const app = express()

//db

const password = process.env.DBPASSWORD

const DB =
  "mongodb+srv://bloodlink:anurag123@cluster0.zhvhe.mongodb.net/bloodlink?retryWrites=true&w=majority"

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection Successful")
  })
  .catch((err) => {
    console.log(err, "Connection cant be made")
  })
app.use(morgan("dev"))
app.use(bodyParser.json({ limit: "2mb" }))
app.use(cors())

//route

app.get("/", (req, res) => {
  res.json({
    data: "hey you hit node API",
  })
})

//listen

app.listen(8000, () => {
  console.log("server is running on port 8000")
})
