import React, { useEffect } from 'react'
import AllChats from '../components/AllChats'
import OpenChat from '../components/OpenChat'
import { useScreenSize } from '../constants/useScreenSize';

const Home = () => {
  const {width, height} = useScreenSize();

  return (
    <>
      <main className='h-screen w-full flex justify-around'>
        <AllChats />
        {
          width > 540 &&   <OpenChat />
        }
      </main>
    </>
  )
}

export default Home