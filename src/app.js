import express from "express";
import { jwtRoutes } from "./routes/jwt.routes.js";
import bodyParser from "body-parser";
import mysql from "mysql2"

const app = express()
const pool = mysql.createPool({
    host: 'db',
    user: 'root',
    database: 'example',
    password: "example"
});

pool.query("SELECT 1 + 1");
console.log(pool.query("SELECT 1"))

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({msg: "Hello world"})
})
app.use("/api", jwtRoutes)

app.listen(3000, () => {
    console.log("Server listen on port 3000")
})