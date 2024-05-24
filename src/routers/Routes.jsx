import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import MainLayout from "../layouts/MainLayout";
import OurMenu from "../page/OurMenu/OurMenu";
import Shop from "../page/Shop/Shop";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Dashboard from "../layouts/Dashboard";
import MyCart from "../page/Dashboard/MyCart/MyCart";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AllUser from "../page/Dashboard/AllUser/AllUser";
import AdminRoute from "./AdminRoute";
import AddItem from "../page/Dashboard/AddItems/AddItem";
import ManagePost from "../page/Dashboard/ManagePost/ManagePost";


const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
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
        errorElement: <ErrorPage />,
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            // Admin link
            {
                path: 'allUsers',
                element: <AdminRoute><AllUser /></AdminRoute>
            },
            {
                path: 'addItems',
                element: <AdminRoute><AddItem /></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManagePost /></AdminRoute>
            },
            // Normal User link
            {
                path: 'my-cart',
                element: <MyCart />
            }
        ]
    }
])

export default router;