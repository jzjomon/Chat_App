import React, { useEffect, useState } from 'react'
import Login from '../components/login'
import SignUp from '../components/signUp';

const Auth = () => {
  const [auth, setAuth] = useState("signIn");

  return (
    <>
      <div className='w-full h-screen bg-blue-500 flex justify-center'>
        {auth === "signIn" ? <Login setAuth={setAuth} /> : <SignUp setAuth={setAuth} />}
      </div>
    </>
  )
}

export default Auth