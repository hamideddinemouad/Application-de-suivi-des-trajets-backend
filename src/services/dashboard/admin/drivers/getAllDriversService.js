import userModel from "../../../../models/userModel.js";

export default async function getAllDriversService(){
    const drivers = await userModel.find({role : "driver"});
    console.log(drivers);
    return drivers;
}