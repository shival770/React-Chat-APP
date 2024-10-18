import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";


const verifyUser = async (req , res, next) => {
   try {
    const token = req.cookies.JWT ;
    if (!token)  return next(errorHandler(401  , 'Unauthorized : No Token provided.'))
    
    const decoded = jwt.verify(token , process.env.JWT) ;
    if (!decoded) return next(errorHandler(401 , 'Unauthroized : Invalid Token'));
    
    const user = await User.findOne({_id : decoded.userId}).select('-password')
    
    if(!user) return next(errorHandler(404 , 'User not found!'));
  
    req.user = user ;
    next();
   } catch (error) {
    next(error)
   }
}

export default verifyUser;