import truckModel from "../../../models/truckModel.js";
import tripModel from "../../../models/tripModel.js";
import userModel from "../../../models/userModel.js";

export default async function adminDashService (){
    try {
        const totalTrips = await tripModel.countDocuments();
        const totalTrucks =await  truckModel.countDocuments();
        const totalDrivers = await userModel.countDocuments({role : "driver"});
        return ({totalDrivers : totalDrivers, totalTrucks : totalTrucks, totalTrips : totalTrips});
    } catch (error) {
        console.log(error);
    }
}