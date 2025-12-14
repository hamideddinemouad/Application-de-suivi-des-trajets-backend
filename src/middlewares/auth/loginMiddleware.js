const loginMiddleware = (req,res, next) => {
    if(!req.body.email || !req.body.password){
        res.json({error : "all fields are required"});
        return;
    }
    const email = req.body.email;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        res.json({error : "invalid email adress"});
        return;
    }
    next();
}


export default loginMiddleware;