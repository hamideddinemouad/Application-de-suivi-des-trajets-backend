import getAllTripsService from "../../../../services/dashboard/admin/trips/getAllTripsService.js";
export default async function getAllTripsController(req, res){
    const trips = await getAllTripsService();
    res.status(200).json({message : trips});
}