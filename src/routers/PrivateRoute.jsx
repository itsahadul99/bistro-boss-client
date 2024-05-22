/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/Auth/useAuth";
const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation()
    if(loading){
        return <div>loading</div>
    }
    if(user) return children;
    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivateRoute;