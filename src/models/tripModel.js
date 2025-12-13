import mongoose from "mongoose";

const tripModel = new mongoose.Schema({
    origin : String,
    destination : String,
    truck : Number,
    driver : String,
    status : String,
})