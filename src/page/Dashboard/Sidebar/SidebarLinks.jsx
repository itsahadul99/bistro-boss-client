/* eslint-disable react/prop-types */
import useAdmin from "../../../hooks/IsAdmin/useAdmin";
import { CiMail } from "react-icons/ci";
import { FaBook, FaHome, FaRegBookmark, FaShoppingCart, FaUsers } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineRestaurant, MdOutlineReviews } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import Loading from "../../../components/Loading";

const SidebarLinks = ({isToggle}) => {
    const [isAdmin, isAdminLoading] = useAdmin()
    if (isAdminLoading) return <div><Loading /></div>
    return (
        <div className={` ${isToggle ? 'bg-[#D1A054]': 'bg-none'} *:list-none space-y-5 font-cinzel uppercase font-medium`}>
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
                            <li><NavLink to="addItems"
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
    );
};

export default SidebarLinks;