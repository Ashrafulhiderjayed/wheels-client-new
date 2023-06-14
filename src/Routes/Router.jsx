import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home"
import Gallery from "../Pages/Home/Gallery/Gallery";
import Login from "../Pages/Home/Login/Login";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'gallery',
                element: <Gallery></Gallery>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
        ]
    }
])

export default router;