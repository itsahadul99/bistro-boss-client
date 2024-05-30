import { FaCalendar, FaPhone, FaShop, FaStar } from "react-icons/fa6";
import useAuth from "../../../hooks/Auth/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useCart from "../../../hooks/Cart/useCart";
import useReview from "../../../hooks/useReview";

const UserHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: history = []} = useQuery({
        queryKey: ['history', user?.email],
        queryFn: async() => {
            const {data} = await axiosSecure.get(`/paymentHistory/${user?.email}`)
            return data
        }
    })
    const [cart] = useCart()
    const [reviews] = useReview()
    console.log(cart);
    return (
        <div>
            <h1 className="text-xl md:text-3xl font-cinzel font-semibold">Hi, Welcome Back,  <span>{user && user?.displayName}</span>
            </h1>
            <div className="text-white flex flex-col md:flex-row justify-around items-center gap-5 md:gap-10 my-5 md:my-8">
                <div className="md:h-[150px] md:w-[400px] bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex gap-5 justify-center items-center rounded-lg p-5 md:p-0">
                    <FaShop className="md:size-16 size-6" />
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold font-inter">165</h1>
                        <p className="text-sm md:text-lg lg:text-xl">Menu</p>
                    </div>
                </div>
                <div className="md:h-[150px] md:w-[400px] bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]  flex gap-5 justify-center items-center rounded-lg p-5 md:p-0">
                    <FaShop className="md:size-16 size-6" />
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold font-inter">165</h1>
                        <p className="text-sm md:text-lg lg:text-xl">Shop</p>
                    </div>
                </div>
                <div className="md:h-[150px] md:w-[400px] bg-gradient-to-r from-[#FE4880] to-[#FECDE9]  flex gap-5 justify-center items-center rounded-lg p-5 md:p-0">
                    <FaPhone className="md:size-16 size-6" />
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold font-inter">205</h1>
                        <p className="text-sm md:text-lg lg:text-xl">Contact</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:min-h-[400px]">
                <div className="bg-[#FFEDD5] flex flex-col justify-center items-center flex-1">
                    <div className="p-5 rounded-full md:p-0 h-[100px] w-[100px] md:h-[200px] md:w-[200px] bg-white border-2 border-red-400">
                        <img className="rounded-full bg-contain w-full h-full"  src={user?.photoURL} alt="" />
                    </div>
                    <h1 className="text-center font-cinzel text-xl md:text-2xl font-semibold mt-5">{user?.displayName}</h1>
                </div>
                <div className="bg-[#FEF9C3] flex-1 text-center flex flex-col justify-center items-center">
                    <div className="space-y-3">
                        <h1 className="text-xl md:text-3xl font-cinzel font-semibold">Your Activities</h1>
                        <div className="text-[#0088FE] flex gap-2 items-center">
                            <FaShoppingCart size={20} />
                            <h3 className="text-lg md:text-xl font-inter">Orders: {cart.length} </h3>
                        </div>
                        <div className="text-[#00C4A1] flex gap-2 items-center">
                            <FaStar size={20} />
                            <h3 className="text-lg md:text-xl font-inter">Reviews: {reviews.length}</h3>
                        </div>
                        <div className="text-[#FFBB28] flex gap-2 items-center">
                            <FaCalendar size={20} />
                            <h3 className="text-lg md:text-xl font-inter">Bookings: </h3>
                        </div>
                        <div className="text-[#FF8042] flex gap-2 items-center">
                            <FaShoppingCart size={20} />
                            <h3 className="text-lg md:text-xl font-inter">Payment: {history.length} </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;