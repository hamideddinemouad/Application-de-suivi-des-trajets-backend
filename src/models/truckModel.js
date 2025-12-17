import mongoose, { mongo } from "mongoose";

const truckSchema = new mongoose.Schema(
    {
        plateNumber: String,
    },
    {
        timestamps: true,
    })
const truckModel = mongoose.model("truckModel", truckSchema);
export default truckModel;