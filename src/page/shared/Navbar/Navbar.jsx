import { NavLink } from "react-router-dom";
const Navbar = () => {
    const navLinks = <>
        <li><NavLink to="/"
            className={({ isActive }) =>
                isActive
                    ? "text-[#EEFF25] font-bold text-xs md:text-lg"
                    : "font-bold text-white"
            }
        >Home
        </NavLink></li>
        <li><NavLink to="/contact"
            className={({ isActive }) =>
                isActive
                    ? "text-[#EEFF25] font-bold text-xs md:text-lg"
                    : "font-bold text-white text-xs md:text-lg"
            }
        >Contact Us
        </NavLink></li>
        <li><NavLink to="/our-menu"
            className={({ isActive }) =>
                isActive
                    ? "text-[#EEFF25] font-bold text-xs md:text-lg"
                    : "font-bold text-white text-xs md:text-lg "
            }
        >Our Menu
        </NavLink></li>
        <li><NavLink to="/dashboard"
            className={({ isActive }) =>
                isActive
                    ? "text-[#EEFF25] font-bold text-xs md:text-lg"
                    : "font-bold text-white text-xs md:text-lg "
            }
        >Dashboard
        </NavLink></li>
        <li><NavLink to="/our-shop"
            className={({ isActive }) =>
                isActive
                    ? "text-[#EEFF25] font-bold text-xs md:text-lg"
                    : "font-bold text-white text-xs md:text-lg"
            }
        >Our Shop
        </NavLink></li>
        <li><NavLink to="/login"
            className={({ isActive }) =>
                isActive
                    ? "text-[#EEFF25] font-bold text-xs md:text-lg"
                    : "font-bold text-white text-xs md:text-lg"
            }
        >Login
        </NavLink></li>
    </>
    return (
        <div>
            <div className="navbar fixed z-20 bg-[#151515] bg-opacity-5 md:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="font-bold font-cinzel text-white tracking-wide">
                        <h1 className="text-xs md:text-3xl">Bistro Boss</h1>
                        <p className="text-xs md:text-xl lg:tracking-[7px]">Restaurant</p>
                    </div>
                </div>
                <div className="navbar-end">
                    <ul className="hidden lg:flex lg:gap-5 items-center">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;