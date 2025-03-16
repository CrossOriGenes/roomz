const jwt = require('jsonwebtoken')
require('dotenv').config()

function verifyToken(req, res, next){
    const bearerheader = req.headers["authorization"];
    if (typeof bearerheader === "undefined") {
        console.log("not verified");
        return res.status(403).json({msg: "invalid user"});
    }
    else{
        const bearer = bearerheader.split(' ');
        const bearertoken = bearer[1];
        jwt.verify(bearertoken, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ valid: false, message: "Token invalid!" });
            }
    
            req.token = bearertoken;
            next();
        });
    }
}

module.exports = verifyToken