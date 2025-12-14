import express, { json } from "express"
import loginRoutes from "./routes/auth/loginRoutes.js";
import registerRoutes from "./routes/auth/registerRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
await mongoose.connect("mongodb://localhost:27017/suivi-trajets");

const PORT = 3000;
app.use(express.json());

app.use("/api/auth/login", loginRoutes);
app.use("/api/auth/register", registerRoutes);

app.listen(PORT, ()=>{
    console.log("lisening on port " + PORT);
})


app.get("/", (req, res) => {
    res.json("listening on port " + PORT)
});



