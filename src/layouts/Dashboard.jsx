import { Outlet } from "react-router-dom";
import Sidebar from "../page/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className=" lg:flex bg-[#F6F6F6]">
            {/* Side bar */}
            <div className="lg:min-h-screen" >
                <Sidebar />
            </div>
            {/* Outlet */}
            <div className="flex-1 lg:px-20 my-5 lg:my-10 max-w-6xl mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;