import express from "express";
import Router from "./routes/user.route.js";

const app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use('/',Router)


app.get('/',(req,res)=>{
    res.send("Server is running")
})



export default app;