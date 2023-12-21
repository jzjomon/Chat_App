import React, { useEffect } from 'react'
import AllChats from '../components/AllChats'
import OpenChat from '../components/OpenChat'
import { useScreenSize } from '../constants/useScreenSize';
import { useDispatch, useSelector } from 'react-redux';
import { setView } from "../redux/viewSlice";
import { setOnlineUsers } from '../redux/onlineUsers'
import { baseURL } from '../constants/baesURL';
import io from 'socket.io-client'

const Home = () => {
  const socket = io(baseURL);
  const dispatch = useDispatch();
  const { onlineUsers } = useSelector(state => state.onlineUsers)
  const { userDetails } = useSelector(state => state.userDetails);
  const { width, height } = useScreenSize();
  const { view, component } = useSelector(state => state.view);

  useEffect(() => {
    socket.emit("addUserId", userDetails?._id);
    return () => {
      socket.disconnect();
    }
  }, [])

  socket.on("onlineUsers", onlineUsers => {
    // dispatch(setOnlineUsers( onlineUsers ))
  })



  useEffect(() => {
    if (width < 540) {
      dispatch(setView("mobile"));
    } else {
      dispatch(setView("lap"))
    }
  }, [width])


  return (
    <>
      <main className='h-screen w-full flex justify-around'>
        {
          view === "lap" ? <>
            <AllChats />
            <OpenChat socket={socket}/>
          </> : <>
            {component === "users" ? <>
              <AllChats />
            </> : <>
              <OpenChat socket={socket}/>
            </>}
          </>
        }
      </main>
    </>
  )
}

export default Home