import { RiMenuFold2Line, RiMenuUnfold4Line2 } from "react-icons/ri";
import { useState } from "react";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
    const [isToggle, setIsToggle] = useState(false)
    const handleToggle = () => {
        setIsToggle(!isToggle)
    }
    return (
        <>
            {/* Small screen navbar */}
            <div className="lg:hidden navbar bg-[#D1A054]">
                <div className="navbar-start">
                    <div className="text-[#151515]">
                        <h1 className="text-xl font-cinzel font-bold uppercase">Bistro Boss</h1>
                        <h3 className="text-xs font-bold tracking-[7px] mt-1 font-cinzel uppercase">Restaurant</h3>
                    </div>
                </div>
                <div className="navbar-end">
                    <button onClick={handleToggle}>{isToggle ? <RiMenuUnfold4Line2 size={30} /> : <RiMenuFold2Line size={30} />}</button>
                </div>
            </div>
            {isToggle &&
                <SidebarLinks isToggle={true} />
            }
            {/* big screen navbar */}
            <div className="hidden lg:block w-64 min-h-screen fixed p-5 bg-[#D1A054]">
                <div className="text-[#151515] py-8">
                    <h1 className="text-2xl md:text-3xl font-cinzel font-bold uppercase">Bistro Boss</h1>
                    <h3 className="text-lg font-bold tracking-[7px] mt-1 font-cinzel uppercase">Restaurant</h3>
                </div>
                <SidebarLinks />
            </div>
        </>
    );
};

export default Sidebar;