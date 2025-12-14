import registerService from "../../services/auth/registerService.js";

const registerController = async (req, res) => {
    try {
        await registerService(req.body);
        res.status(201).json({ message: "registered successfuly" });
    } catch (error) {
        switch (error.message) {
            case "EMAIL_TAKEN":
                res.status(409).json({ message: "email already used" });
                break;
            default:
                res.status(500).json({ message: "Unknown Error" });
                console.error(error);
                break;
        }
    }
}
export default registerController;