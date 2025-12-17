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
        cookie : jest.fn().mockReturnThis(),
        status : jest.fn().mockReturnThis(),
        json : jest.fn()
    }

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test("token returned succesfuly", async () => {
        loginService.mockResolvedValue("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTE3MTc0MWJkYjlkYTJlOGNiOWIzOTkiLCJlbWFpbCI6Im1vdWFkQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzYzMTIyNjQzLCJleHAiOjE3NjMxMjMyNDd9.hTgBi99BnJIRy0SNhgi4O23eHuSGrMaQ7I2eSR8ee3Q");
        await loginController(req, res);
        expect(res.status).toHaveBeenCalledWith(200)
    })
})