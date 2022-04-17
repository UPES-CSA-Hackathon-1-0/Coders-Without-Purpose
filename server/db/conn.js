const mongoose = require("mongoose")

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
