import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    origin: String,
    destination: String,
    truck: Number,
    driver: String,
    status: String,
},
    {
        timestamps: true
    })

const tripModel = mongoose.model("tripModel", tripSchema);
export default tripModel;