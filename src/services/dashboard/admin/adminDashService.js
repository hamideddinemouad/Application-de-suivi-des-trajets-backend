import truckModel from "../../../models/truckModel.js";
import tripModel from "../../../models/tripModel.js";

export default async function adminDashService (){
    try {
        const trips = await tripModel.find();
        const trucks = await truckModel.find();
    } catch (error) {
        
    }
}