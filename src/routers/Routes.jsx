import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import MainLayout from "../layouts/MainLayout";
import OurMenu from "../page/OurMenu/OurMenu";
import Shop from "../page/Shop/Shop";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Dashboard from "../layouts/Dashboard";
import MyCart from "../page/Dashboard/MyCart/MyCart";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }, 
            {
                path: '/our-menu',
                element: <OurMenu />
            },
            {
                path: '/our-shop',
                element: <Shop />
            },
            {
                path: '/our-shop/:category',
                element: <Shop />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Register />
            }

        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'my-cart',
                element: <MyCart />
            }
        ]
    }
])

export default router;