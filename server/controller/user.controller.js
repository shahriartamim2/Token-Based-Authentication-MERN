import jwt from "jsonwebtoken";
import User from "../models/user.model.js"
import bcrypt from 'bcrypt';
import 'dotenv/config'

const saltRounds = 10;
const SECRET_KEY = process.env.SECRET_KEY


const registerUser = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await User.findOne({ username: username });
        if(user){
            res.send("Username already exists. Try a different username")
        }else{
            bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
                const newUser = new User({
                    username: username,
                    password: hash,
                })

                const user = await newUser.save()
                res.status(200).send({
                    message: "New user registered successfully",
                    user: {
                        id: user._id,
                        username: user.username
                    }
                })
            });
        }
    } catch (error) {
res.status(404).send({
    message:"Failed to register",
    error:error
})
    }
}


const loginUser = async (req, res) => {
    
    try {
        const username = req.body.username;
        const user = await User.findOne({username:username})

        if (user) {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (result === true) {
                    const payload = {
                        id: user._id,
                        username: user.username
                    }
                    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "2d" })

                    res.status(200).send({
                        success: true,
                        message: "Logged in successfully",
                        token: "Bearer " + token,

                    })
                }
                else{
                    return res.status(200).send({
                        message: "Incorrect password",

                    })
                }
            });
        }
        else {
            res.status(402).send({
                message: "User not found.Try a different username"
            })
        }
        }
 catch (error) {
        res.status(404).send({
            message: "Bad url request",
            error: error
        })
    }
}

const getProfile = (req, res) =>{
    res.send({
        success:true,
            id: req.user._id,
            username:req.user.username
    });
}



export {registerUser, loginUser, getProfile}