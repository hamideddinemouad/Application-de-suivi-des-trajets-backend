import loginService from "../../services/auth/loginService.js";
const loginController = async (req, res) => {
    try {
        const token =  await loginService(req.body);
        res.status(200).json({message : "logged in succesfuly", token : token});
        return;
    } catch (error) {
        console.error("loginControllerErr : " + error);
        switch (error.message) {
            case "INVALID_CREDENTIALS":
                res.status(401).json({ message: "email or password are incorrect" });
                break;
            case "SERVER_CONFIG":
                res.status(500).json({ message: "Server Error" });
                break;
            case "UNKNOWN_ERROR":
                res.status(500).json({ message: "Unknown Server Error" });
                break;
            default:
                res.status(500).json({ message: "Unknown Error" });
                break;
        }
    }
}
export default loginController;