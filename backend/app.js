const express = require ('express');
const errorMiddleware = require('./middleware/error')
const product = require('./routes/productRoute')
const user = require('./routes/userRoute')
const cookieParser = require("cookie-parser")

// Express application
const app = express();


//Data-json parser
app.use(express.json());

//Cookie parser
app.use(cookieParser());

// Route set
app.use("/api/v1", product)
app.use("/api/v1", user)

//Middleware for Errors
app.use(errorMiddleware)


module.exports = app