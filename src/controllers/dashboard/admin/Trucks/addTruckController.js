import addTruckService from "../../../../services/dashboard/admin/trucks/addTruckService.js"

export default async function addTruckController(req, res){
    try {
        await addTruckService(req.body);
        res.status(201).json({message : "truck added"});
    } catch (error) {
        res.status(404).json({message : "serverError"});
    }
}