import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName : {
        type : String , 
        requried : true   
    },
    username : {
        type : String , 
        required : true ,
        unique : true 
    },
    email : {
        type : String , 
        required : true,
        unique : true
    },
    gender : {
        type : String , 
        required : true , 
        enum : ['male' , 'female']
    },
    password : {
        type : String,
        required : true
    },
    profilePic : {
        type : String , 
        default : ''
    }
})


const User = mongoose.model('User' , userSchema);

export default User ; 