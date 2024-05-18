import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../page/shared/Navbar/Navbar";
import Footer from "../page/shared/Footer/Footer";

const MainLayout = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login')
    return (
        <>
            {
                !isLogin && <Navbar />
            }
            <div>
                <Outlet />
            </div>
            {
                
                !isLogin && <Footer />
            }
        </>
    );
};

export default MainLayout;