import mongoose from "mongoose";

const truckModel = new mongoose.Schema({
    plateNumber : Number,
    mileage : Number
})