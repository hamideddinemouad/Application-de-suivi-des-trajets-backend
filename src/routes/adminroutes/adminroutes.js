import express from "express";
import adminMiddleware from "../../middlewares/protectedroutes/adminMiddleware.js";

const adminRoutes = express.Router();

adminRoutes.use(adminMiddleware);

adminRoutes.get("/", (req, res) => {
    res.json("admin route");
})

export default adminRoutes;