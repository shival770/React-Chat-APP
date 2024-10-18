import jwt from 'jsonwebtoken';


const generateTokenAndSetCookie = (userId , res) => {
    const token = jwt.sign({userId} , process.env.JWT , {expiresIn : '15d'});
    res.cookie('JWT' , token ,{
        maxAge : 15 * 24 * 60 * 60 * 1000,
        httpOnly : true,
        sameSite : 'strict'
    } )

}

export default generateTokenAndSetCookie;

