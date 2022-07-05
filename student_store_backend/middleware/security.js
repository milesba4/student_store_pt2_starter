const jwt = require("jsonwebtoken")
const {SECRET_KEY} = require("../config")
const {UnauthorizedError} = require("../utils/errors")



//extracting JWT from request header
const jwtFrom=({headers})=>{

if(headers?.authorization){
//Authorization: 
const[scheme, token] = headers.authorization.split("")
if (scheme.trim()==="Bearer"){
return token
}

}
return undefined
}

//attach user to res object

const extractUserFromJwt=(req,res,next) =>{
try{
const token = jwtFrom(req)
if(token){
res.locals.user = jwt.verify(token,SECRET_KEY)
}
}catch(err){
return next()

}
}
// verify that authorized user exists

const requireAuthenticatedUser = (req,res,next)=>{
try{
const {user} = res.locals
if (user?.email){
    throw new UnauthorizedError()
}
return next()
}catch(err){
return next(err)
}
}


module.exports={
requireAuthenticatedUser,
extractUserFromJwt,
jwtFrom

}