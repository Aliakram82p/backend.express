const express = require('express')
require('dotenv').config();
const port = process.env.PORT
const app = express()


app.use(express.json())

app.get('/home' ,(req, res)=>{res.send("welcome to Home")});

 
app.listen(port, (req,res)=>{
    console.log(`We are Connected on ${port}`)
});