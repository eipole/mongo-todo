if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3000

app.use(cors())
app.options("*", cors())
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE, PUT, PATCH"
  )
  next()
})

const mongoose = require("mongoose")
const mongoDB = process.env.DATABASE_URL
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("connected to mongoose"))

mongoose.connection.on("open", function (ref) {
  console.log("Connected to mongo server.")
})

mongoose.connection.on("error", function (err) {
  console.log("Could not connect to mongo server!")
  return console.log(err)
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const todoRouter = require("./routes/todos")
app.use("/todos", todoRouter)

// app.listen(process.env.PORT || 3000)
app.listen(port, function () {
  console.log("jookseb " + port)
})
/* app.use(function (req, res, next) {
  // req.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE, PUT, PATCH"
  )
  next()
}) */
/* app.use(function (req, res, next) {
  // req.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE, PUT, PATCH"
  )
  next()
})
 */
