import { useState } from "react"
import useLogIn from "../hooks/useLogIn"









 const Login = () => {
    const [loginData , setLoginData] = useState({
        username : '',
        password : ''
    })
    const handleOnChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.id] : e.target.value

        })
    }
    console.log(loginData);
    const {loading , logIn} = useLogIn();
    const handleOnClick = async (e) => {
        e.preventDefault();
        await logIn(loginData)
    }
    return (
        <div className="flex flex-col items-center min-w-96 mx-auto justify-center">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
                <h1 className="text-3xl font-semibold text-center text-gray-300">Login
                <span className="text-blue-500 pl-2">ChatApp</span>
                </h1>
                <form onSubmit={handleOnClick}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input 
                        id="username"
                        value={loginData.username}
                        onChange={handleOnChange}
                        type="text" 
                        placeholder="Enter username" 
                        className="input-bordered input w-full h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input 
                        id='password'
                        value={loginData.password}
                        onChange={handleOnChange}
                        type="password" 
                        placeholder="Enter password" 
                        className="input-bordered input w-full h-10" />
                    </div>
                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2">Don't have an account?</a>
                    <div>
                        {
                            !loading ? 
                            <button className="btn btn-neutral black btn-block btn-sm mt-2  ">Log in</button>
                            : 
                            <span className="loading-spinner"></span>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login