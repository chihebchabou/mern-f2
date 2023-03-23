const express = require('express');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const colors = require('colors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middlewares
app.use(express.json()); //{"name": "John Doe", "age": 25}
app.use(express.urlencoded({extended:false})); // name=JohnDoe&age=25

app.use('/api/contacts', require('./routes/contactRoutes'));
app.use(errorHandler);

app.listen(port, console.log(`Server started on port ${port}`))