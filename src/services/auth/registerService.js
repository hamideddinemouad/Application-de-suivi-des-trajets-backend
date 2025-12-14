import userModel from "../../models/userModel.js"
import bcrypt from "bcrypt";
const registerService = async (requestBody) => {
    const email = requestBody.email;
    const password = requestBody.password;
    const name = requestBody.name;
    const role = "driver";

    try {
        const user = await userModel.findOne({ email: email });
        if (user) {
            throw new Error ("EMAIL_TAKEN")
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await userModel.create({ email: email, password: hashedPassword, name: name, role: role });
        return true;
    } catch (error) {
        throw error;
    }
}
export default registerService