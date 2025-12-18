import express, { json } from "express"
import loginRoutes from "./routes/auth/loginRoutes.js";
import registerRoutes from "./routes/auth/registerRoutes.js";
import adminRoutes from "./routes/adminroutes/adminroutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
await mongoose.connect("mongodb://localhost:27017/suivi-trajets");

const PORT = 3000;
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}
));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth/login", loginRoutes);
app.use("/api/auth/register", registerRoutes);
app.use("/api/dashboard/admin", adminRoutes);

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT + "/");
})

app.get("/api/me", (req, res) => {
    if(!req.cookies.token){
        console.log({message : "guest"})
        res.status(200).json({message : "guest"})
        return
    }
    const payload = jwt.verify(req.cookies.token, process.env.SECRETKEY);
    console.log({message : payload.role});
    res.status(200).json({message : payload.role});
    return
})
app.get("/", (req, res) => {
    res.json("listening on port " + PORT)
});





