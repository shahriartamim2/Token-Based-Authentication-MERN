import express from "express";
import Router from "./routes/user.route.js";
import jwt from "jsonwebtoken";
import passport from "passport";
import "./config/passport.js"

const app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use('/',Router)
app.use(passport.initialize())


app.get('/',(req,res)=>{
    res.send("Server is running")
})



export default app;