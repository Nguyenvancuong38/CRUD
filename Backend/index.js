const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
var bodyParse = require("body-parser")
const morgan = require("morgan")
const dotenv = require("dotenv")
const authorRouter = require("./routes/author")
const bookRouter = require("./routes/book")

app.use(morgan('combined'))

dotenv.config();
//Connect MongoDB 
mongoose.connect((process.env.MONGODB_URL), () => {
    console.log("Connect to MongoDB success!")
})

app.use(bodyParse.json({limit: "50mb"}))
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json("Hello")
})

app.use("/v1/author", authorRouter)
app.use("/v1/book", bookRouter)

app.listen(8000, () => { 
    console.log("Serve is runing....")
})