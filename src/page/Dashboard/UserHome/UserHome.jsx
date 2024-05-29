import { FaPhone, FaShop } from "react-icons/fa6";
import useAuth from "../../../hooks/Auth/useAuth";

const UserHome = () => {
    const { user } = useAuth()
    return (
        <div>
            <h1 className="text-xl md:text-3xl font-cinzel font-semibold">Hi, Welcome Back,  <span>{user && user?.displayName}</span>
            </h1>
            <div className="text-white flex flex-col md:flex-row justify-around items-center gap-5 md:gap-10 my-5 md:my-8">
                <div className="md:h-[150px] md:w-[400px] bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex gap-5 justify-center items-center rounded-lg p-5 md:p-0">
                    <FaShop className="md:size-20 size-6" />
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl lg:text-6xl font-bold font-inter">205</h1>
                        <p className="text-sm md:text-lg lg:text-xl">Menu</p>
                    </div>
                </div>
                <div className="md:h-[150px] md:w-[400px] bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]  flex gap-5 justify-center items-center rounded-lg p-5 md:p-0">
                    <FaShop className="md:size-20 size-6" />
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl lg:text-6xl font-bold font-inter">205</h1>
                        <p className="text-sm md:text-lg lg:text-xl">Shop</p>
                    </div>
                </div>
                <div className="md:h-[150px] md:w-[400px] bg-gradient-to-r from-[#FE4880] to-[#FECDE9]  flex gap-5 justify-center items-center rounded-lg p-5 md:p-0">
                    <FaPhone className="md:size-20 size-6" />
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl lg:text-6xl font-bold font-inter">205</h1>
                        <p className="text-sm md:text-lg lg:text-xl">Contact</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:min-h-[400px]">
                <div className="bg-[#FFEDD5] flex flex-col justify-center items-center flex-1">
                    <div className="rounded-full p-5 md:p-0 h-[100px] w-[100px] md:h-[200px] md:w-[200px] bg-white border-2 border-red-400">
                        <img src="" alt="" />
                    </div>
                    <h1 className="text-center font-cinzel text-xl md:text-2xl font-semibold mt-5">Awalad Hossain</h1>
                </div>
                <div className="bg-[#FEF9C3] flex-1">

                </div>
            </div>
        </div>
    );
};

export default UserHome;