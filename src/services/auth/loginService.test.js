import loginService from "./loginService.js";
import userModel from "../../models/userModel.js";
import bcrypt from "bcrypt"
// const loginService = require("./loginService.js");
jest.mock("../../models/userModel.js", () => (
    { findOne: jest.fn() }
))

jest.mock("bcrypt", () => ({
    compare: jest.fn()
}))

describe("loginService test", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('incorrect email', async () => {
        userModel.findOne.mockResolvedValue(null)
        await expect(loginService(
            { email: "nonexistant@gmail.com", password: "123456" }
        )).rejects.toThrow("INVALID_CREDENTIALS");
    });

    test("incorrect password", async () => {
        userModel.findOne.mockResolvedValue({ password: "the real password" });
        bcrypt.compare.mockResolvedValue(false);
        await expect(loginService(
            { email: "existant@gmail.com", password: "incorrect password" }
        )).rejects.toThrow("INVALID_CREDENTIALS")
    })

    test("missing secret key", async () => {
        userModel.findOne.mockResolvedValue({email : "realemail@gmail.com", password: "the real password", id : 123 });
        bcrypt.compare.mockResolvedValue(true);
        delete process.env.SECRETKEY;
        await  expect(loginService({ email: "existant@gmail.com", password: "incorrect password" }
        )).rejects.toThrow("SERVER_CONFIG")
    })
}
)


// test("")