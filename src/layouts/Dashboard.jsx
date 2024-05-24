import { Outlet } from "react-router-dom";
import Sidebar from "../page/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex bg-[#F6F6F6]">
            {/* Side bar */}
            <div className="min-h-screen" >
                <Sidebar />
            </div>
            {/* Outlet */}
            <div className="flex-1 px-20 my-10 max-w-6xl mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;