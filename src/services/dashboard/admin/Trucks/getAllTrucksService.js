import truckModel from "../../../../models/truckModel.js";
export default async function getAllTrucksService(){
    const trucks = truckModel.find();
    return trucks; 
}