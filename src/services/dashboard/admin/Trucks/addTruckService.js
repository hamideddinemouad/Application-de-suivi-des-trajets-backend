import truckModel from "../../../../models/truckModel.js";

export default async function  addTruckService (requestBody){
    await truckModel.create({plateNumber : requestBody.plateNumber});
}