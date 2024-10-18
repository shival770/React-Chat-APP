import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"



const useLogOut = () => {
    const [loading , setLoading] = useState(false)
    const {setAuthUser} = useAuthContext();
    const  logOut = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/auth/logout');
            const data = await res.json()
            if (data.error) throw new Error(data.error);
            localStorage.removeItem('chat-user')
            setAuthUser(null)
            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading , logOut}
}

export default useLogOut;