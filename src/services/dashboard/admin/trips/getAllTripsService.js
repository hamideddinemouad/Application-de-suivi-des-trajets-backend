// import getAllDriversService from "../drivers/getAllDriversService.js"
// import getAllTrucksService from "../Trucks/getAllTrucksService.js"
import tripModel from "../../../../models/tripModel.js";

export default async function getAllTripsService(){
    const trips = await tripModel.find();
    return trips;
}