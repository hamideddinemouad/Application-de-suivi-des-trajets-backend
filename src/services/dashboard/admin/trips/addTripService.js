import tripModel from "../../../../models/tripModel.js";
export default async function  addTripService(requestBody){
    //     origin: String,
    // destination: String,
    // truck: Number,
    // driver: String,
    // status: String,
    const origin = requestBody.origin;
    const destination = requestBody.destination;
    const truck = requestBody.truck;
    const driver = requestBody.driver;

    await tripModel.create({origin, destination, truck, driver});
}