import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    origin: String,
    destination: String,
    truck: String,
    driver: String,
},
    {
        timestamps: true
    })

const tripModel = mongoose.model("tripModel", tripSchema);
export default tripModel;