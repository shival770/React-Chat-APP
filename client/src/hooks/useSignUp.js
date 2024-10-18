import { useState } from "react"
import toast from "react-hot-toast";

import { useAuthContext } from "../context/AuthContext";


const useSignUp = () => {
    const {setAuthUser} = useAuthContext()

    const [loading , setLoading] = useState(false);

    const signUp = async ({fullName , username , email , password , confirmPassword , gender}) => {
        const success = handleInputError({fullName , username , email , password , confirmPassword , gender}) ;
        if (!success) return ;
        setLoading(true);

        try {
            const res = await fetch ('/api/auth/sign-up' , {
                method : 'POST',
                headers : {
                  'Content-Type' : 'application/json' ,
                },
                body : JSON.stringify({fullName , username ,email, password , confirmPassword , gender}),
              });
            const data = await res.json()
            if(data.error) throw new Error(data.error);
            localStorage.setItem('chat-user' ,  JSON.stringify(data));
            setAuthUser(data);
            console.log(data)
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }

    }
    return { loading , signUp};
}
export default useSignUp;


const handleInputError = ({fullName , username , email, password , confirmPassword , gender}) => {
    if (!fullName || !username || !password || !confirmPassword || !gender || !email) {
        toast.error('please fill in all fields')
        return false
    }
    if(password != confirmPassword){
        toast.error('Password do not match')
        return false
    }
    if(password.length < 6 ){
        toast.error('Password must be at least 6 characters!')
        return false
    }
    return true
}