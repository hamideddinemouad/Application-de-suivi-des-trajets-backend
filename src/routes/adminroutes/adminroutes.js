import express from "express";
import adminMiddleware from "../../middlewares/protectedroutes/adminMiddleware.js";
import adminDashController from "../../controllers/dashboard/admin/adminDashController.js";
import addTruckMiddleware from "../../middlewares/adminDashboard/trucks/addtruckMiddleware.js";
import addTruckController from "../../controllers/dashboard/admin/Trucks/addTruckController.js";
import getAllTrucks from "../../controllers/dashboard/admin/Trucks/getAllTrucks.js";

const adminRoutes = express.Router();

adminRoutes.use(adminMiddleware);

adminRoutes.get("/",adminDashController);

adminRoutes.post("/trucks/", addTruckMiddleware, addTruckController);

adminRoutes.get("/trucks/", getAllTrucks);

export default adminRoutes;