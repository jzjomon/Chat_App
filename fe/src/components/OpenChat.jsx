import React, { useEffect, useRef, useState } from 'react'
import { Avatar, Input, Typography } from '@material-tailwind/react'
import { ArrowLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { Toast } from '../constants/sweetAlert'
import { AxiosInstance } from '../config/axiosConfig'
import { setComponent } from '../redux/viewSlice'
import io from 'socket.io-client';
import { baseURL } from '../constants/baesURL'


const OpenChat = ({ socket }) => {
    const dispatch = useDispatch();
    const scrollRef = useRef(null);
    const [chatId, setChatId] = useState();
    const [sendMessages, setSendMessages] = useState("");
    const [messages, setMessages] = useState([]);
    const { currentChatUser } = useSelector(state => state.currentChat);
    const { view } = useSelector(state => state.view);
    const { userDetails } = useSelector(state => state.userDetails);
    const fullname = `${currentChatUser?.firstname} ${currentChatUser?.lastname}`
    const { onlineUsers } = useSelector(state => state.onlineUsers);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight; 
          }
    }, [messages])

    useEffect(() => {
        getMessages();
    }, []);


    socket.on("message", (message) => {
        if (messages) {
            setMessages([...messages, message])
        }
    })

    const getMessages = () => {
        try {
            AxiosInstance.post("/users/getMessages", { currentChatUser }).then((result) => {
                setChatId(result?.data?.chatId);
                setMessages(result?.data?.data);
            }).catch((err) => { 
                Toast({
                    title: "cannot get messages",
                    icon: "error"
                })
            })
        } catch (error) {
            Toast({
                title: "something went wrong !",
                icon: "error"
            })
        }
    }

    const sendMessage = () => {
        try {
            AxiosInstance.post("/users/sendMessage", { chatId, text: sendMessages, sender: userDetails?._id }).then((result) => {
                socket.emit("sendMessage", { sendMessages, userId: currentChatUser?._id });
                setSendMessages("");
            }).catch((err) => {
                setSendMessages("");
                Toast({
                    title: "cannot send the message !",
                    icon: "error"
                })
            })
        } catch (error) {
            Toast({
                title: "something went wrong !",
                icon: "error"
            })
        }
    }
    if (currentChatUser) return (
        <>
            <main className='w-full h-full  bg-blue-300 md:me-6 flex flex-col items-center'>
                <header className='w-full sticky top-0 h-auto py-1 bg-blue-500  ps-4 flex gap-3'>
                    {

                        view === "mobile" && <ArrowLeftIcon className='w-6 text-white hover:text-xl' onClick={() => dispatch(setComponent("users"))} />
                    }
                    <Avatar className=' bg-white' src='profile-icon.png' />
                    <div className='flex flex-col text-gray-100'>
                        <span className='font-bold'>{fullname}</span>
                        <span className='text-sm'>last seen</span>
                    </div>
                </header>
                <section className=' w-full overflow-auto h-full '>
                    <div className='w-full h-[93%] xl:px-[30%] px-[15%]  overflow-auto' ref={scrollRef} >
                        {
                            messages?.map((message, i) => (

                                <div key={i} className={`w-3/4 px-2 py-1  text-start rounded ${message?.sender == currentChatUser?._id ? "float-right bg-gray-500 text-white" : "bg-white float-left"} mb-1 bg-gray-300`}>{message?.text}</div>

                            ))
                        }
                    </div>
                    <div className='flex justify-center xl:px-[30%] px-[15%] items-center h-[6%]'>
                        <Input label='Message' value={sendMessages} className='bg-white' onKeyDown={(e) => sendMessages && e.key === "Enter" && sendMessage()} onChange={(e) => setSendMessages(e.target.value)} icon={sendMessages && <PaperAirplaneIcon onClick={sendMessage} /> } />
                    </div>
                </section>
            </main>
        </>
    )
    else {
        return (
            <>
                <main className='w-full h-full  bg-blue-300 md:me-6 flex flex-col items-center'>

                </main>
            </>
        )
    }
}

export default OpenChat