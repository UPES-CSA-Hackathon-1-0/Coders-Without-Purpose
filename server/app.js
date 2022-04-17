const express = require("express")

const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()

//app

const app = express()
app.use(require("./route/auth"))
app.use(express.json())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
//db
const User = require("./model/userSchema")
const password = process.env.DBPASSWORD

require("./db/conn")
app.use(morgan("dev"))
app.use(bodyParser.json({ limit: "2mb" }))
app.use(cors())

//middleware

const middleware = (req, res, next) => {
  console.log("my middleware")
  next()
}

//route

const dataroute = require("./route/data")

app.use("/data", dataroute)

app.get("/", (req, res) => {
  res.json({
    data: "hey you hit node API",
  })
})

app.get("/find-donors", middleware, (req, res) => {
  res.send(`register here for finding donors`)
})
app.get("/register-donor", middleware, (req, res) => {
  res.send(`register here as a donor`)
})

//listen

app.listen(8000, () => {
  console.log("server is running on port 8000")
})
