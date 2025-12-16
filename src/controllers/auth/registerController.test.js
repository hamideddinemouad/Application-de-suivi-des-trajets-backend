import registerService from "../../services/auth/registerService.js";
import registerController from "./registerController.js";


jest.mock("../../services/auth/registerService.js", () => (
    {
        __esModule: true,
        default: jest.fn()
    }
)

)
describe("registerController tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })
    const req = {
        body: {
            email: "email@gmail.com",
            password: "password",
            name: "username"
        }
    }
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    }

    test("successful sign up", async () => {
        registerService.mockResolvedValue(true)
        await registerController(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
    })

    test("unknown error test", async () => {
        registerService.mockRejectedValue("rejected")
        await registerController(req, res);
        expect(res.status).toHaveBeenCalledWith(500)
    })
})