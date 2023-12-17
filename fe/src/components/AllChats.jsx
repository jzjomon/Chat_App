import React from 'react'
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Avatar, Input, Typography } from '@material-tailwind/react'

const AllChats = () => {
    return (
        <>
            <main className='2xl:w-1/3 xl:w-2/4 lg:w-3/5 md:w-2/3 sm:w-5/6 overflow-auto w-full bg-blue-200 sm:me-1 md:ms-6 h-full'>
                <header className='w-full  bg-blue-200 sticky top-0 z-30 border-b-white border-b-2'>
                    <div className='px-6 py-3 flex gap-2 text-white'>
                        <Bars3Icon className='w-6' />
                        <Input icon={<MagnifyingGlassIcon />} type='text' className='bg-gray-100' label='Search' />
                    </div>
                </header>
                <section className='px-4 pt-1'>
                    <div className='h-16 rounded hover:bg-blue-100 mb-1 transition-all flex items-center px-2 relative'>
                        <Avatar src='/profile-icon.png' alt='avatar' className='object-cover object-center rounded-full border border-gray-600' />
                        <div className='ms-3'>
                            <Typography variant='h6'>
                                Full Name
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
                    <div className='h-16 rounded hover:bg-blue-100 mb-1 transition-all flex items-center px-2 relative'>
                        <Avatar src='/profile-icon.png' alt='avatar' className='object-cover object-center rounded-full border border-gray-600' />
                        <div className='ms-3'>
                            <Typography variant='h6'>
                                Full Name
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
                    <div className='h-16 rounded hover:bg-blue-100 mb-1 transition-all flex items-center px-2 relative'>
                        <Avatar src='/profile-icon.png' alt='avatar' className='object-cover object-center rounded-full border border-gray-600' />
                        <div className='ms-3'>
                            <Typography variant='h6'>
                                Full Name
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
                    <div className='h-16 rounded hover:bg-blue-100 mb-1 transition-all flex items-center px-2 relative'>
                        <Avatar src='/profile-icon.png' alt='avatar' className='object-cover object-center rounded-full border border-gray-600' />
                        <div className='ms-3'>
                            <Typography variant='h6'>
                                Full Name
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
                    <div className='h-16 rounded hover:bg-blue-100 mb-1 transition-all flex items-center px-2 relative'>
                        <Avatar src='/profile-icon.png' alt='avatar' className='object-cover object-center rounded-full border border-gray-600' />
                        <div className='ms-3'>
                            <Typography variant='h6'>
                                Full Name
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
                    <div className='h-16 rounded hover:bg-blue-100 mb-1 transition-all flex items-center px-2 relative'>
                        <Avatar src='/profile-icon.png' alt='avatar' className='object-cover object-center rounded-full border border-gray-600' />
                        <div className='ms-3'>
                            <Typography variant='h6'>
                                Full Name
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
                    <div className='h-16 rounded hover:bg-blue-100 mb-1 transition-all flex items-center px-2 relative'>
                        <Avatar src='/profile-icon.png' alt='avatar' className='object-cover object-center rounded-full border border-gray-600' />
                        <div className='ms-3'>
                            <Typography variant='h6'>
                                Full Name
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
                    <div className='h-16 rounded hover:bg-blue-100 mb-1 transition-all flex items-center px-2 relative'>
                        <Avatar src='/profile-icon.png' alt='avatar' className='object-cover object-center rounded-full border border-gray-600' />
                        <div className='ms-3'>
                            <Typography variant='h6'>
                                Full Name
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
                    <div className='h-16 rounded hover:bg-blue-100 mb-1 transition-all flex items-center px-2 relative'>
                        <Avatar src='/profile-icon.png' alt='avatar' className='object-cover object-center rounded-full border border-gray-600' />
                        <div className='ms-3'>
                            <Typography variant='h6'>
                                Full Name
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
                    <div className='h-16 rounded hover:bg-blue-100 mb-1 transition-all flex items-center px-2 relative'>
                        <Avatar src='/profile-icon.png' alt='avatar' className='object-cover object-center rounded-full border border-gray-600' />
                        <div className='ms-3'>
                            <Typography variant='h6'>
                                Full Name
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
                    <div className='h-16 rounded hover:bg-blue-100 mb-1 transition-all flex items-center px-2 relative'>
                        <Avatar src='/profile-icon.png' alt='avatar' className='object-cover object-center rounded-full border border-gray-600' />
                        <div className='ms-3'>
                            <Typography variant='h6'>
                                Full Name
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
                    <div className='h-16 rounded hover:bg-blue-100 mb-1 transition-all flex items-center px-2 relative'>
                        <Avatar src='/profile-icon.png' alt='avatar' className='object-cover object-center rounded-full border border-gray-600' />
                        <div className='ms-3'>
                            <Typography variant='h6'>
                                Full Name
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
                    <div className='h-16 rounded hover:bg-blue-100 mb-1 transition-all flex items-center px-2 relative'>
                        <Avatar src='/profile-icon.png' alt='avatar' className='object-cover object-center rounded-full border border-gray-600' />
                        <div className='ms-3'>
                            <Typography variant='h6'>
                                Full Name
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
                    
                </section>
            </main>
        </>
    )
}

export default AllChats