import jwt from "jsonwebtoken";
import User from "../models/user.model.js"
import bcrypt from 'bcrypt';
import 'dotenv/config'

const saltRounds = 10;
const SECRET_KEY = process.env.SECRET_KEY


const registerUser = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
            const newUser = new User({
                username: username,
                password: hash,
            })

            const user = await newUser.save()
            res.status(200).send({
                message : "New user registered successfully",
                user :{
                    id: user._id,
                    username: user.username
                }

            })
        });

    } catch (error) {
res.status(404).send({
    message:"Failed to register",
    error:error
})
    }
}


const loginUser = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {

        const user = await User.findOne({username:username})

        if(!user){
            res.status(401).send({message:"User is not found",success:false})
        }
        if (!bcrypt.compare(req.body.password, user.password)){

            res.status(200).send({
                message:"Incorrect password",
                
            })
        }
        const payload = {
            id: user._id,
            username: user.username
        }
        const token = jwt.sign(payload, SECRET_KEY, {expiresIn:"2d"})

        res.status(200).send({
            success:true,
            message:"Logged in successfully",
            token : "Bearer" + token

        })


        }
 catch (error) {
        res.status(404).send({
            message: "Bad url request",
            error: error
        })
    }
}

export {registerUser, loginUser}