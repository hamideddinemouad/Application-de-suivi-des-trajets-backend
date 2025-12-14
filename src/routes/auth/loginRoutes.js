import express from "express"
import loginMiddleware from "../../middlewares/auth/loginMiddleware.js";
import loginController from "../../controllers/auth/loginController.js";

const loginRoutes = express.Router();

loginRoutes.use(loginMiddleware);

loginRoutes.post("/", loginController);

export default loginRoutes;
