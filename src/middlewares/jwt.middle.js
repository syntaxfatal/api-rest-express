import jsonwebtoken from "jsonwebtoken";
import { key } from "../configs/config.js";
function verifyToken(req, res, next) {
    const authHeader = req.headers["access-token"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.status(403).json({ msg: "Not set header"});
    jsonwebtoken.verify(token, key, (err, user) => {
       if (err) return res.status(403).json({ msg: "Not autorized"});
       next();
    });
}

export {verifyToken}