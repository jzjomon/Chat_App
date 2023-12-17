import React, { useState } from 'react'
import Button from './Button'
import { Alert, Toast } from '../constants/sweetAlert';
import { AxiosInstance } from '../config/axiosConfig.js'
import { validateFirstName, validateLastName, validateEmail, validatePass } from '../constants/Rejex.jsx'

const SignUp = ({ setAuth }) => {
    const [details, setDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });
    const [confirmPass, setConfirmPass] = useState("");

    const handleSubmit = async () => {
        try {
            AxiosInstance.post("/signUp", details).then((result) => {
                Toast({
                    title: "Sign Up Success",
                    text: "please sign in",
                    icon: "success"
                }).then(() => {
                    setAuth("signIn");
                })
            }).catch(({ response: { data } }) => {
                Toast({
                    title: `${data?.message}`,
                    icon: "warning"
                });
            });
        } catch (error) {
            Alert({
                title: "Somethin went wrong !",
                icon: "error"
            })
        }
    }

    const handleDetails = () => {
        try {
            if (!details.firstname && !details.lastname && !details.email && !details.password && !details.confirmPass) {
                Toast({
                    title: "Inputs cannot be empty !",
                    icon: "error"
                })
            } else {
                if (!validateFirstName.test(details.firstname)) {
                    Toast({
                        title: "Invalid firstname !",
                        icon: "warning"
                    })
                } else if (!validateLastName.test(details.lastname)) {
                    Toast({
                        title: "Invalid lastname !",
                        icon: "warning"
                    })
                } else if (!validateEmail.test(details.email)) {
                    Toast({
                        title: "Invalid email id !",
                        icon: "warning"
                    })
                } else if (!validatePass.test(details.password)) {
                    Toast({
                        title: "Your password must be a minimum of 6 characters, starting with an alphabetical letter or number, and include at least one special character",
                        icon: "warning",
                        timer: 3000
                    })
                } else if (!confirmPass) {
                    Toast({
                        title: "Invalid confirm password !",
                        icon: "warning"
                    })
                } else {
                    if (details.password !== confirmPass) {
                        Toast({
                            title: "passwords are not same !",
                            icon: "error"
                        })
                    } else {
                        handleSubmit();
                    }
                }
            }

        } catch (error) {
            Toast({
                title: "Something went wrong !",
                icon: "error"
            })
        }
    }
    return (
        <>
            <div className='m-auto overflow-auto h-[90%] 2xl:w-1/4 pb-3 xl:w-1/3 lg:w-2/5 md:w-2/4  sm:w-1/2  w-5/6 shadow-xl shadow-gray-800 bg-white rounded-2xl'>
                <div className='text-center py-3 mt-3' >
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                </div>
                <div className='flex flex-col px-8 gap-5 font-bold'>
                    <label >First name</label>
                    <input value={details.firstname} type="text" placeholder='First name' onChange={(e) => setDetails({ ...details, firstname: e.target.value.trim() })} className='rounded p-2 border-black border' />
                    <label >Last name</label>
                    <input value={details.lastname} type="text" placeholder='Last name' className='rounded p-2 border-black border' onChange={(e) => setDetails({ ...details, lastname: e.target.value.trim() })} />
                    <label >Email address</label>
                    <input value={details.email} type="text" placeholder='Enter email' className='rounded p-2 border-black border' onChange={(e) => setDetails({ ...details, email: e.target.value.trim() })} />
                    <label >Password</label>
                    <input type="text" value={details.password} placeholder='Enter password' className='rounded p-2 border-black border' onChange={(e) => setDetails({ ...details, password: e.target.value.trim() })} />
                    <label >Confirm password</label>
                    <input value={confirmPass} type="text" placeholder='Confirm password' className='rounded  p-2 border-black border' onChange={(e) => setConfirmPass(e.target.value.trim())} />
                    <Button label="Submit" className="text-white rounded bg-blue-500 p-2 border-2 border-white transition-all hover:bg-white hover:border-2 hover:border-blue-500 hover:text-blue-500" handleClick={() => handleDetails()} />
                    <div className='text-end mt-1 text-sm'>
                        <span>have an account <span className='text-blue-500 cursor-pointer' onClick={() => setAuth("signIn")}>Sign In</span></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp