const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5500;

const todoItemRoute = require('./routes/todoItems');

mongoose.connect(process.env.DB_CONNECT).then(() => console.log("Database connected")).catch(err => console.log(err));

app.listen(PORT, () => console.log("Server connected"));

app.use('/', todoItemRoute);