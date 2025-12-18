export default function addTripsMiddleware(req, res, next) {
    //     origin: String,
    // destination: String,
    // truck: Number,
    // driver: String,
    // status: String,
    const { origin, destination, truck, driver} = req.body;
    if (!origin || !destination || !truck || !driver) {
        return res.status(400).json({
            message: "all fields  are required"
        });
    }
    next();
}