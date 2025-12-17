import tripModel from "../../../models/tripModel";
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
    const status = requestBody.status;

    await tripModel.create({origin, destination, truck, driver, status});
    
}