import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginForm from "../layouts/LoginForm";
import RegisterForm from "../layouts/RegisterForm";
import useAuth from "../hooks/useAuth";
import Header from "../layouts/Header";
import UserHome from "../layouts/UserHome";

const guestRouter = createBrowserRouter([
    {
        path: '/',
        element: <>
            <Header/>
            <Outlet />
        </>,
        children: [
            { index: true, element: <LoginForm /> },
            { path: '/register', element: <RegisterForm /> }
        ]
    }
])

const userRouter = createBrowserRouter([
    {
        path: '/',
        element:<>
            <Header/>
            <Outlet/>
        </>,
        children: [
            { index: true , element: <UserHome/> },
            { path: '/new' , element: <p>New Todo Form</p>}
        ]
    }
])

export default function AppRouter() {
    const {user} = useAuth()
    const finalRouter = user?.id ? userRouter : guestRouter
    return (
        <RouterProvider router={finalRouter} />
    )
}