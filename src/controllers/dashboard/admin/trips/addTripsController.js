import addTripService from "../../../../services/dashboard/admin/trips/addTripService.js";

export default async function addTripsController(req, res){
    try {
        await addTripService(req.body);
    } catch (error) {
        console.log(error);
    }
    
}