import getAllDriversService from "../../services/dashboard/admin/drivers/getAllDriversService.js";
export default async function  getAllDriversController (req, res){
    const drivers  = await getAllDriversService()
    //   console.log(drivers);
    res.status(200).json({message : drivers});
}