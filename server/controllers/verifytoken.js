const jwt = require('jsonwebtoken')
const User = require('../models/user-schema')
require('dotenv').config()

async function verifyToken(req, res, next){
    const bearerheader = req.headers["authorization"]
    if (typeof bearerheader === "undefined") {
        console.log("User not verified")
        return res.status(403).json({msg: "Invalid user/token"})
    }
    else{
        const bearer = bearerheader.split(' ')
        const bearertoken = bearer[1]
        jwt.verify(bearertoken, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(403).json({ valid: false, message: "Token invalid!" })
            }
            
            const user = await User.findById(decoded.id)
            req.token = bearertoken
            req.user = user
            next()
        })
    }
}

module.exports = verifyToken