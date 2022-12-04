import jsonwebtoken from "jsonwebtoken";
import express from "express";
import { key } from "../configs/config.js";
import { verifyToken } from "../middlewares/jwt.middle.js";

const jwtRoutes = express.Router()

jwtRoutes.post("/jwt/signup", (req, res) => {
    const payload = {
        check: true
    }
    jsonwebtoken.sign(payload, key, (err, token) => {
        if (err){
            res.status(400).json({ error: "error" })
        } else{
            res.status(200).json({ msg: "Success", token: token })
        }
    }) 
})

jwtRoutes.post("/jwt/login", verifyToken, (req, res) => {
    res.status(200).json({ msg: "Login Success."})
})

export {jwtRoutes}