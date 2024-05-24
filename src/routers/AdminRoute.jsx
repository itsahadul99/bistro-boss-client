/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/Auth/useAuth";
import useAdmin from "../hooks/IsAdmin/useAdmin";
import Loading from "../components/Loading";
const AdminRoute = ({ children }) => {
    const [isAdmin, isAdminLoading] = useAdmin()
    const { user, loading } = useAuth();
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <div><Loading /></div>
    }
    if (user && isAdmin) return children;
    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default AdminRoute;