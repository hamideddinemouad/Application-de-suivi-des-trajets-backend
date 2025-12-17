import jwt from "jsonwebtoken"

const adminMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization;
    const cookiesToken = req.cookies.token;
    if (!authorization && !cookiesToken) {
        res.status(401).json({ message: "no authorization provided" });
        return
    }
    const secretKey = process.env.SECRETKEY;
    if (authorization) {
        const authorizationString = authorization.split(" ");
        const token = authorizationString[1];

        if (!secretKey) {
            res.status(500).json({ message: "Server Error" });
            return
        }
        const payload = jwt.verify(token, secretKey);
        if (payload.role !== "admin") {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        next();
        return
    }
    if (!secretKey) {
        res.status(500).json({ message: "Server Error" });
        return
    }
    const payload = jwt.verify(cookiesToken, secretKey);
    if (payload.role !== "admin") {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    next();
    return
}

export default adminMiddleware;