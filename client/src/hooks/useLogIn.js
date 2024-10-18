import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import {toast} from 'react-hot-toast';

const useLogIn =  () => {
    const {setAuthUser} = useAuthContext();
    const [loading , setLoading] = useState(false);
    const logIn = async ({username , password}) => {
      const success =   handleInputError({username , password})
      if (!success) return 
      setLoading(true)
      try {
        const res = await fetch('/api/auth/login' , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({username , password})

        })
        const data = await res.json()
        if (data.error) throw new Error(data.error)
        localStorage.setItem('chat-user' , JSON.stringify(data))
        setAuthUser(data);
      } catch (error) {
        toast.error(error.message)
      }finally{
        setLoading(false)
      }
    }
    return {loading , logIn}
}

export default useLogIn;



const handleInputError = ({username , password}) => {
    if (!username || !password){
        toast.error('please all the field for login')
        return false
    }
    return true
}