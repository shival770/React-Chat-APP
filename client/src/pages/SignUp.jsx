import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";









const SignUp = () => {
    const [signUpData , setSignUpData] = useState({
        fullName : '',
        username : '',
        email : '',
        password : '',
        confirmPassword : '',
        gender : ''
    })
    const handleOnChange = (e) => {
        if (e.target.id === 'gender') {
                setSignUpData({
                    ...signUpData , 
                    [e.target.id] : e.target.value
                })
        }else {
            setSignUpData({
                ...signUpData,
                [e.target.id] : e.target.value
            })
        }

    }
    const {loading , signUp} = useSignUp();
    const handleOnSubmit  = async (e) => {
        e.preventDefault() 
        await signUp(signUpData);
        
    }
    
    return (
        <div className="flex flex-col items-center min-w-96 mx-auto justify-center">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
                <h1 className="text-3xl font-semibold text-center text-gray-300">Sign up
                <span className="text-blue-500 pl-2">ChatApp</span>
                </h1>
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full name</span>
                        </label>
                        <input 
                        value ={signUpData.fullName}
                        onChange={handleOnChange}
                        id="fullName"
                        type="text" 
                        placeholder="Enter full name" 
                        className="input-bordered input w-full h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input 
                        value={signUpData.username}
                        onChange={handleOnChange}
                        id="username"
                        type="text" 
                        placeholder="Enter username" 
                        className="input-bordered input w-full h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input 
                        value={signUpData.email}
                        onChange={handleOnChange}
                        id="email"
                        type="text" 
                        placeholder="Enter email" 
                        className="input-bordered input w-full h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input 
                        value={signUpData.password}
                        onChange={handleOnChange}
                        id="password"
                        type="password" 
                        placeholder="Enter password" 
                        className="input-bordered input w-full h-10" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm password</span>
                        </label>
                        <input 
                        value={signUpData.confirmPassword}
                        onChange={handleOnChange}
                        id="confirmPassword"
                        type="password" 
                        placeholder="Confirm password" 
                        className="input-bordered input w-full h-10" />
                    </div>
                    <div>
                    <div className="flex">
                        <div className="form-control">
                            <label className="label gap-2 cursor-pointer">
                                <span className="label-text">Male</span>
                                <input
                                    id="gender"
                                    value={'male'}
                                    checked={signUpData.gender === 'male'}
                                    onChange={handleOnChange}
                                    type="checkbox" className="checkbox border-slate-900" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label gap-2 cursor-pointer">
                                <span className="label-text">female</span>
                                <input
                                    value={'female'}
                                    id="gender"
                                    checked={signUpData.gender === 'female'}
                                    onChange={handleOnChange}
                                 type="checkbox" className="checkbox border-slate-900" />
                            </label>
                        </div>
                    </div>
                    </div>
                    <Link to='/login' className="text-sm hover:underline hover:text-blue-600 mt-2">already have an account?</Link>
                    <div>
                        <button className="btn btn-neutral black btn-block btn-sm mt-2 " disabled={loading}>
                         {
                            loading ? <span className="loading-spinner"></span> : SignUp
                         }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;