const express = require ('express');
const errorMiddleware = require('./middleware/error')
const product = require('./routes/productRoute')

// Express application
const app = express();

//Data-json parser
app.use(express.json())

// Route imports
app.use("/api/v1", product)

//Middleware for Errors
app.use(errorMiddleware)


module.exports = app