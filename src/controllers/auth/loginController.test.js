import loginService from "../../services/auth/loginService.js";
import loginController from "./loginController.js";

jest.mock("../../services/auth/loginService.js", () => (
    {
        __esModule: true,  
        default : jest.fn()
    }
))

describe("loginController tests", () => {
    const req = {
        body: {
            email: "email@gmail.com",
            password: "password",
            name: "username"
        }
    }
    const res = {
        status : jest.fn().mockReturnThis(),
        json : jest.fn()
    }

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test("token returned succesfuly", async () => {
        loginService.mockResolvedValue("this a jwt token");
        await loginController(req, res);
        expect(res.status).toHaveBeenCalledWith(200)
    })
})