import express from "express"
import registerMiddleware from "../../middlewares/auth/RegisterMiddleware.js";
import registerController from "../../controllers/auth/registerController.js";

const registerRoutes = express.Router();
registerRoutes.use(registerMiddleware);

registerRoutes.post("/", registerController);


export default registerRoutes;