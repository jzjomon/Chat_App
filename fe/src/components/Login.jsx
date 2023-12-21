import React, { useState } from 'react'
import Button from './Button'
import { Alert, Toast } from '../constants/sweetAlert.js'
import { AxiosInstance } from "../config/axiosConfig.js"
import { useDispatch } from "react-redux"
import { setUserDetails } from "../redux/userSlice.js"
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuth }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        try {
            if (email && password) {
                AxiosInstance.post("/signIn", {email, password}).then(({data}) => {
                    localStorage.setItem("userDetails", JSON.stringify(data?.data));
                    localStorage.setItem("token", data?.token)
                    dispatch(setUserDetails(data?.data));
                    navigate("/home");
                }).catch(({response : {data}}) => {
                    Toast({
                        title : `${data?.message}`,
                        icon : "error"
                    })
                });
            } else {
                Toast({
                    title : "Inputs cannot be empty",
                    icon : "warning"
                })
            }
        } catch (error) {
            Alert({
                title: "Something went wrong !",
                icon: "error"
            })
        }
    }
    return (
        <>
            <div className='m-auto h-[60%] overflow-auto 2xl:w-1/4 pb-4 xl:w-1/3 lg:w-2/5  md:w-2/4  sm:w-1/2  w-5/6 shadow-xl shadow-gray-800 bg-white rounded-2xl'>
                <div className='text-center py-3 mt-3' >
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                </div>
                <div className='flex flex-col px-8 gap-5 font-bold'>
                    <label >Email address</label>
                    <input value={email} type="text" placeholder='Enter email' className='rounded p-2 border border-black' onChange={(e) => setEmail(e.target.value)} />
                    <label >Password</label>
                    <input value={password} type="text" placeholder='Enter password' className='rounded p-2 border border-black' onChange={(e) => setPassword(e.target.value)} />
                    <div className='mt-3'>
                        <input type="checkbox" className='rounded p-2 border border-black' />
                        <span className='ps-3'>Remember me</span>
                    </div>
                    <Button label="Submit" className="text-white rounded bg-blue-500 p-2 border-2 border-white transition-all hover:bg-white hover:border-2 hover:border-blue-500 hover:text-blue-500" handleClick={() => handleSubmit()} />
                    <div className='flex justify-between mt-3 text-sm'>
                        <span>Don't have an account <span className='text-blue-500 cursor-pointer' onClick={() => setAuth("signUp")}>Create One</span></span>
                        <span>Forgot <span className='text-blue-500'>password ?</span></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login