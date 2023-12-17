import { Navigate, Outlet } from "react-router-dom";

export const Authorization = () => {
    const user = localStorage.getItem("userDetails");
    return (user ? <Outlet /> : <Navigate to="/" />)
} 

export const SignOutOrHome = () => {
    const user = localStorage.getItem("userDetails");
    return (user ? <Navigate to="/home" /> : <Outlet />)
} 