export default function addTruckMiddleware(req, res, next) {
    if (!req.body || !req.body.plateNumber) {
        return res.status(400).json({
            message: "plateNumber is required"
        });
    }
    next();
}
