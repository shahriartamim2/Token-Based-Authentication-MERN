import express from "express";
import 'dotenv/config'
import app from "./app.js";
import connectDb from "./config/database.js";
import cors from 'cors';


app.use(cors())

const port = process.env.PORT || 4001;

connectDb()

app.listen(port,(req,res)=>{
    console.log(`App listening on http://localhost:${port}`)
})




