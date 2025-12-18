import getAllTripsService from "../../../../services/dashboard/admin/trips/getAllTripsService.js";
export default async function getAllTripsController(){
    const trips = await getAllTripsService();
    res.status(200).json({message : trips});
}