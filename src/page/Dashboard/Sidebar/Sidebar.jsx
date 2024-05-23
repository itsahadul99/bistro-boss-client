import { CiMail } from "react-icons/ci";
import { FaBook, FaHome, FaRegBookmark, FaShoppingCart, FaUsers } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineRestaurant, MdOutlineReviews } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import useAdmin from "../../../hooks/IsAdmin/useAdmin";

const Sidebar = () => {
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    return (
        <div className="w-64 min-h-screen p-5 bg-[#D1A054]">
            <div className="text-[#151515] py-8">
                <h1 className="text-2xl md:text-3xl font-cinzel font-bold uppercase">Bistro Boss</h1>
                <h3 className="text-lg font-bold tracking-[7px] mt-1 font-cinzel uppercase">Restaurant</h3>
            </div>
            <div className="*:list-none space-y-5 font-cinzel uppercase font-medium">
                {/* Based on Rule link */}
                {
                    isAdmin ? <>
                        <li><NavLink to="/dashboard"
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white text-lg flex gap-2 items-center"
                                    : "font-bold text-[#151515] text-lg flex gap-2 items-center"
                            }
                        >
                            <FaHome />  Admin Home
                        </NavLink>
                        </li>
                        <li><NavLink to="/add-item"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white text-lg flex gap-2 items-center"
                                    : "font-bold text-[#151515] text-lg flex gap-2 items-center"
                            }
                        >
                            <MdOutlineRestaurant />  Add Items
                        </NavLink>
                        </li>
                        <li><NavLink to="manageItems"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white text-lg flex gap-2 items-center"
                                    : "font-bold text-[#151515] text-lg flex gap-2 items-center"
                            }
                        >
                            <TfiMenuAlt />  manage items
                        </NavLink>
                        </li>
                        <li><NavLink to="manageBooking"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white text-lg flex gap-2 items-center"
                                    : "font-bold text-[#151515] text-lg flex gap-2 items-center"
                            }
                        >
                            <FaBook />  Manage Booking
                        </NavLink>
                        </li>
                        <li><NavLink to="allUsers"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white text-lg flex gap-2 items-center"
                                    : "font-bold text-[#151515] text-lg flex gap-2 items-center"
                            }
                        >
                            <FaUsers />  all users
                        </NavLink>
                        </li>
                    </>
                        :
                        <>
                            <li><NavLink to="/dashboard"
                                end
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white text-lg flex gap-2 items-center"
                                        : "font-bold text-[#151515] text-lg flex gap-2 items-center"
                                }
                            >
                                <FaHome />User Home
                            </NavLink>
                            </li>
                            <li><NavLink to="/reservation"
                                end
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white text-lg flex gap-2 items-center"
                                        : "font-bold text-[#151515] text-lg flex gap-2 items-center"
                                }
                            >
                                <SlCalender />reservation
                            </NavLink>
                            </li>
                            <li><NavLink to="payment-history"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white text-lg flex gap-2 items-center"
                                        : "font-bold text-[#151515] text-lg flex gap-2 items-center"
                                }
                            >
                                <TfiMenuAlt />payment history
                            </NavLink>
                            </li>
                            <li><NavLink to="my-cart"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white text-lg flex gap-2 items-center"
                                        : "font-bold text-[#151515] text-lg flex gap-2 items-center"
                                }
                            >
                                <FaShoppingCart /> my cart
                            </NavLink>
                            </li>
                            <li><NavLink to="review"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white text-lg flex gap-2 items-center"
                                        : "font-bold text-[#151515] text-lg flex gap-2 items-center"
                                }
                            >
                                <MdOutlineReviews />add review
                            </NavLink>
                            </li>
                            <li><NavLink to="booking"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white text-lg flex gap-2 items-center"
                                        : "font-bold text-[#151515] text-lg flex gap-2 items-center"
                                }
                            >
                                <FaRegBookmark />my booking
                            </NavLink>
                            </li>
                        </>
                }

                <div className="divider"></div>
                {/* Common link */}
                <li><NavLink to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-white text-lg flex gap-2 items-center"
                            : "font-bold text-[#151515] text-lg flex gap-2 items-center"
                    }
                >
                    <FaHome /> Home
                </NavLink>
                </li>
                <li><NavLink to="/our-menu"
                    className={({ isActive }) =>
                        isActive
                            ? "text-white text-lg flex gap-2 items-center"
                            : "font-bold text-[#151515] text-lg flex gap-2 items-center"
                    }
                >
                    <IoMdMenu /> Menu
                </NavLink>
                </li>
                <li><NavLink to="/our-shop"
                    className={({ isActive }) =>
                        isActive
                            ? "text-white text-lg flex gap-2 items-center"
                            : "font-bold text-[#151515] text-lg flex gap-2 items-center"
                    }
                >
                    <FaShop />Shop
                </NavLink>
                </li>
                <li><NavLink to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? "text-white text-lg flex gap-2 items-center"
                            : "font-bold text-[#151515] text-lg flex gap-2 items-center"
                    }
                >
                    <CiMail />Contact
                </NavLink>
                </li>
            </div>
        </div>
    );
};

export default Sidebar;