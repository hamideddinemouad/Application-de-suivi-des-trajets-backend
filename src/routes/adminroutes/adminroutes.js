import express from "express";
import adminMiddleware from "../../middlewares/protectedroutes/adminMiddleware.js";
import adminDashController from "../../controllers/dashboard/admin/adminDashController.js";
import addTruckMiddleware from "../../middlewares/adminDashboard/trucks/addtruckMiddleware.js";
import addTruckController from "../../controllers/dashboard/admin/trucks/addTruckController.js";
import getAllTrucks from "../../controllers/dashboard/admin/trucks/getAllTrucks.js";
import addTripsController from "../../controllers/dashboard/admin/trips/addTripsController.js";
import getAllDriversController from "../../controllers/drivers/getAllDriversController.js";
import getAllTripsController from "../../controllers/dashboard/admin/trips/getAllTripsController.js";

const adminRoutes = express.Router();

adminRoutes.use(adminMiddleware);

adminRoutes.get("/",adminDashController);

adminRoutes.post("/trucks/", addTruckMiddleware, addTruckController);

adminRoutes.get("/trucks/", getAllTrucks);

adminRoutes.get("/drivers", getAllDriversController)

adminRoutes.get("/trips", getAllTripsController);

adminRoutes.post("/trips", addTripsController);

export default adminRoutes;