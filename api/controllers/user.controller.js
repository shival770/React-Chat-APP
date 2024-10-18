import User from "../models/user.model.js";

export const getUserForSideBar = async (req , res  , next) => {
        try {
            const loginUserId = req.user._id ;
            const filterUser = await User.find( {_id : {$ne : loginUserId}})
            res.status(200).json(filterUser);   
        } catch (error) {
            next(error)
        }
}