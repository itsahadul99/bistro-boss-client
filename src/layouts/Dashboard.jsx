import { Outlet } from "react-router-dom";
import Sidebar from "../page/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* Side bar */}
            <div >
                <Sidebar />
            </div>
            {/* Outlet */}
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;