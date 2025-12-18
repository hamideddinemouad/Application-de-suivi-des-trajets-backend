import getAllTrucksService from "../../../../services/dashboard/admin/trucks/getAllTrucksService.js";

export default async function (req, res){
    const trucks = await getAllTrucksService();
    res.status(200).json({message : trucks});
    return;
}