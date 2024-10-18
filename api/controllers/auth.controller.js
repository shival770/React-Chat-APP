import User from "../models/user.model.js"
import { errorHandler } from "../utills/error.js";
import bcryptjs from 'bcryptjs';
import generateTokenAndSetCookie from "../utills/generateToken.js";

export const signUp = async (req , res , next) => {
    
    const {fullName , username ,email, password, confirmPassword , gender} = req.body ;
    

    if (password != confirmPassword) return next(errorHandler(400 , 'Password does not match'));
    const user = await User.findOne({username : username})
    if (user){
        return next(errorHandler(400 , 'User already exists'))

    }

    const hashedPassword = bcryptjs.hashSync(password , 10)
    const boyProfile = 'https://tse2.mm.bing.net/th?id=OIP.Oz8GZj5x5iekT4_oPjuYHgHaK9&pid=Api&P=0&h=180'
    const girlProfile = 'https://tse2.mm.bing.net/th?id=OIP.S8jaOOqoqD7NjVFmqkwxHAHaHU&pid=Api&P=0&h=180'

    const newuser = new User({

        fullName , 
        username , 
        email,
        password : hashedPassword,
        gender ,
        profilePic : gender === 'male' ? boyProfile : girlProfile
    })
    try {
        await newuser.save()
        generateTokenAndSetCookie(newuser._id , res)
        res.status(201).json({
           _id : newuser._id ,
           fullName : newuser.fullName , 
           username : newuser.username,
           profilePic : newuser.profilePic,
        })
    }catch(error) {
        next(error)
    }
} 
export const logIn = async (req , res , next) => {
    try {
        const {username , password} = req.body ; 
        
        const validUser = await User.findOne({username : username});        
        if (!validUser) return next(errorHandler(404 , 'User not found !'));
        const validPassword = bcryptjs.compareSync(password , validUser.password);
        if (!validPassword) return errorHandler(next(401 , 'Wrong Credentials'));
        generateTokenAndSetCookie(validUser._id , res);
        const {password : pass , gender : gen , ...rest} = validUser._doc ; 
        res.status(201).json(rest);
    } catch (error) {
        next(error);
    }
    

    
} 
export const logOut = async (req , res , next) => {
    try {
        res.clearCookie('JWT')
        res.status(200).json("Log out sucessfully!");
    } catch (error) {
        next(error)
    }
}