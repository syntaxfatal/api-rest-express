import express from "express";
import { jwtRoutes } from "./routes/jwt.routes.js";
import bodyParser from "body-parser";
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({msg: "Hello world"})
})
app.use("/api", jwtRoutes)

app.listen(3000, () => {
    console.log("Server listen on port 3000")
})