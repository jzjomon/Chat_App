import React, { useEffect, useState } from 'react'
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Avatar, Input, Typography } from '@material-tailwind/react';
import { setUserDetails } from '../redux/userSlice'
import Button from './Button'
import { AxiosInstance } from '../config/axiosConfig';
import { Alert, Toast } from '../constants/sweetAlert';
import { setCurrentChatUser } from '../redux/currentChat';
import { useScreenSize } from '../constants/useScreenSize';
import { setComponent, setView } from '../redux/viewSlice';

const AllChats = () => {
    const [signOut, setSignOut] = useState(false);
    const { view, component} = useSelector(state => state.view);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = () => {
        try {
            AxiosInstance.get("/users/getUsers").then((result) => {
                setUsers(result?.data?.data)
            }).catch((err) => {
                Toast({
                    title: "cannot get users",
                    icon: "error",
                })
            });
        } catch (error) {
            Alert({
                title: "Something went wrong !",
                icon: "error"
            })
        }
    }

    const handleSingOut = () => {
        dispatch(setUserDetails({}));
        localStorage.clear();
        navigate('/');
    }

    const handleOpenChat = (user) => {
        dispatch(setCurrentChatUser(user));
        if (view === "mobile") {
            dispatch(setComponent("openchat"))
        };

    }
    return (
        <>
            <main className='2xl:w-1/3 xl:w-2/4 lg:w-3/5 md:w-2/3 sm:w-5/6 flex flex-col  w-full bg-blue-300 sm:me-1 md:ms-6 h-full'>
                <header className='w-full  bg-blue-500 sticky top-0 z-30 border-b-white border-b-2'>
                    <div className='px-6 py-3 flex gap-2 text-gray-200'>
                        <div className='relative flex justify-center ' onMouseOver={() => setSignOut(true)} onMouseLeave={() => setSignOut(false)}>
                            <Bars3Icon className='w-6 cursor-pointer' />
                            {
                                signOut && <Button label="Sign Out" className="absolute top-8 bg-red-700 border rounded-xl text-sm px-2 " handleClick={handleSingOut} />
                            }
                        </div>
                        <Input icon={<MagnifyingGlassIcon className='text-gray-800 ' />} type='text' className='bg-white' label='Search' />
                    </div>
                </header>
                <section className='px-4 pt-1 text-gray-200 overflow-auto'>
                    {
                        users.map((user, i) => (

                            <div key={i} onClick={() => handleOpenChat(user)} className='h-16 rounded hover:bg-blue-100  hover:text-gray-900 mb-1 transition-all flex items-center px-2 relative'>
                                <Avatar src='/profile-icon.png' alt='avatar' className='object-cover object-center rounded-full bg-white' />
                                <div className='ms-3'>
                                    <Typography variant='h6'>
                                        {user?.firstname} {user?.lastname}
                                    </Typography>
                                    <Typography variant='small'>
                                        Message...
                                    </Typography>
                                </div>
                                <Typography variant='small' className='absolute top-1 right-2'>
                                    Date 00
                                </Typography>
                                <Typography as="button" className='absolute bottom-1 right-3  px-2 rounded-full bg-gray-500 text-white'>
                                    12
                                </Typography>
                            </div>


                        ))
                    }


                </section>
            </main>
        </>
    )
}

export default AllChats