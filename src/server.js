const express=require('express');
const bodyParser=require('body-parser');
const connectDB = require('./db');
const urlRoutes=require('./routes/urlRoutes');
// const path=require('path');


const app=express();
const PORT=3000;

// connection to database
connectDB();
// middleware vo hota jo client aur server side ke bich kaam krta hai

app.use(bodyParser.json());

app.use('/',urlRoutes);
app.use(express.static('public'));

app.listen(PORT,()=>{
    console.log(`Server is running fine on ${PORT}`);
})





