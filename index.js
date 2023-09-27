const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 5500;
const loginroute=require("./routes/login")
const signuproute = require("./routes/signup");
const todoroute = require("./routes/todo");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.set('strictQuery', false);
app.use('/', loginroute);
app.use('/', signuproute);
app.use('/', todoroute);

mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))

console.log(PORT);
app.get('/', function(req, res) {
    res.send('Hello Sir')
})

app.listen(PORT, ()=> console.log("Starting ...") );
