import express from "express";
import { getProfile, loginUser, registerUser } from "../controller/user.controller.js";
import passport from "passport";
const router = express.Router();


router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/profile', passport.authenticate('jwt', { session: false }),
getProfile)

export default router;
