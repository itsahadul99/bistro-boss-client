import { FaShop, FaUsers } from "react-icons/fa6";
import useAuth from "../../../hooks/Auth/useAuth";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { LuCar } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";

const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data = [], isLoading} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async() => {
            const {data} = await axiosSecure.get('/admin-stats')
            return data
        }
    })

    return (
        <div>
            <h1 className="text-xl md:text-3xl font-cinzel font-semibold">Hi, Welcome Back,  <span>{user && user?.displayName}</span>
            </h1>
            <div className="text-white flex flex-col md:flex-row justify-around items-center gap-5 md:gap-10 my-5 md:my-8">
                <div className=" p-5 md:p-10 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex gap-5 justify-center items-center rounded-lg">
                    <FaShop className="md:size-16 size-6" />
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl lg:text-6xl font-bold font-inter">{data?.revenue}</h1>
                        <p className="text-sm md:text-lg lg:text-xl">Revenue</p>
                    </div>
                </div>
                <div className="p-5 md:p-10 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]  flex gap-5 justify-center items-center rounded-lg">
                    <FaUsers className="md:size-16 size-6" />
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl lg:text-6xl font-bold font-inter">{data?.users}</h1>
                        <p className="text-sm md:text-lg lg:text-xl">Customers</p>
                    </div>
                </div>
                <div className="p-5 md:p-10 bg-gradient-to-r from-[#FE4880] to-[#FECDE9]  flex gap-5 justify-center items-center rounded-lg">
                    <MdOutlineProductionQuantityLimits className="md:size-16 size-6" />
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl lg:text-6xl font-bold font-inter">{data?.menuItems}</h1>
                        <p className="text-sm md:text-lg lg:text-xl">Products</p>
                    </div>
                </div>
                <div className="p-5 md:p-10 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]  flex gap-5 justify-center items-center rounded-lg">
                    <LuCar className="md:size-16 size-6" />
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl lg:text-6xl font-bold font-inter">{data?.orders}</h1>
                        <p className="text-sm md:text-lg lg:text-xl">Order</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;