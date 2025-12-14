import jwt from "jsonwebtoken"

const adminMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(!authorization){
        res.status(401).json({message : "no authorization provided"});
        return
    }
    const authorizationString = authorization.split(" ");
    const token = authorizationString[1];
    const secretKey = process.env.SECRETKEY;
    if(!secretKey){
        res.status(500).json({message : "Server Error"});
        return
    }
    const payload = jwt.verify(token, secretKey);
    if(payload.role !== "admin"){
        res.status(401).json({message : "Unauthorized"});
        return;
    }
    next();
}

export default adminMiddleware;