import userModel from "../../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
const loginService = async (requestBody) => {
    const email = requestBody.email;
    const password = requestBody.password;

    try {
        const user = await userModel.findOne({email : email})
        if(!user){
            throw new Error("INVALID_CREDENTIALS");
        }
        const storedPassword = user.password;
        const passwordMatch = await bcrypt.compare(password, storedPassword);
        if(!passwordMatch){
            throw new Error("INVALID_CREDENTIALS");
        }
        const userid = user.id;
        const payload = {
            email : email,
            id : userid,
            role : user.role
        }
        const secretKey = process.env.SECRETKEY;
        if(!secretKey){
           throw new Error ("SERVER_CONFIG");
        }
        const expiry = {expiresIn : "100h"};
        const token = jwt.sign(payload, secretKey, expiry);
        return token;
    } catch (error) {
        // console.error("loginServiceerr : "  + error.message);
        throw error;
    }
}
export default loginService;