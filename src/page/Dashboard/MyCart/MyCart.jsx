import SectionTitle from "../../../components/SectionTitle";
import useCart from "../../../hooks/Cart/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyCart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, items) => total + items.price, 0)
    return (
        <dispatchEvent>
            <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"My cart"} />
            <div className="overflow-x-auto p-8 shadow-sm mt-12 bg-white">
                <div className="text-[#151515] font-semibold my-5 flex justify-evenly text-3xl">
                    <h1>Total Order: {cart.length}</h1>
                    <h1>total price: ${totalPrice}</h1>
                    <button className="btn bg-[#D1A054] font-cinzel font-medium text-lg text-white">Pay</button>

                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-inter uppercase bg-[#D1A054] text-white p-5">
                            <th>
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, idx) => <tr key={item?._id}>
                                <th>
                                    {idx + 1}
                                </th>
                                <td>
                                    <div className="size-20 items-center flex justify-center">
                                        <img src={item?.image} alt="Item img" />
                                    </div>
                                </td>
                                <td>
                                    {item?.name}
                                </td>
                                <td>
                                    ${item?.price}
                                </td>
                                <th>
                                    <button className="btn btn-ghost text-white bg-[#B91C1C]">
                                        <RiDeleteBin6Line size={20} />
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </dispatchEvent>
    );
};

export default MyCart;