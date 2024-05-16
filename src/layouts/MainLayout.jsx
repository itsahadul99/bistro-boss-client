import { Outlet } from "react-router-dom";
import Navbar from "../page/shared/Navbar/Navbar";
import Footer from "../page/shared/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;