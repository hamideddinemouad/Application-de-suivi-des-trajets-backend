//imports
//mocks
//describe
//clear mocks
//define vars preferable
import registerService from "./registerService.js";
import userModel from "../../models/userModel.js";

jest.mock("../../models/userModel.js", () => (
    {
        findOne: jest.fn()
    }
));



describe("registerService tests", () => {
    const mockedRequest = {
        email: "email@gmail.com",
        password: "password",
        name: "username"
    }
    const mockedUser = {
        email: "email@gmail.com",
        password: "password",
        name: "username",
        id: 12,
        role: "admin"
    }


    beforeEach(() => {
        jest.clearAllMocks();
    })

    test("already used email", async () => {
        userModel.findOne.mockResolvedValue(mockedUser);
        await expect(registerService(mockedRequest)).rejects.toThrow("EMAIL_TAKEN")
    })
})