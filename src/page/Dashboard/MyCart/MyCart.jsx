import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import useCart from "../../../hooks/Cart/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const MyCart = () => {
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, items) => total + items.price, 0)
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Successfully delete this item",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"My cart"} />
            <div className="overflow-x-auto overflow-y-auto p-8 shadow-sm mt-12 bg-white">
                <div className="text-[#151515] font-bold my-5 flex justify-evenly text-2xl font-cinzel uppercase items-center">
                    <h1>Total Order: {cart.length}</h1>
                    <h1>Total price: ${totalPrice}</h1>
                    {cart.length ? <Link to={`/dashboard/payment`}>
                        <button className="btn bg-[#D1A054] font-cinzel font-medium text-lg text-white">Pay</button>
                    </Link>: <button disabled className="btn bg-[#D1A054] font-cinzel font-medium text-lg text-white">Pay</button>}

                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-inter uppercase bg-[#D1A054] text-white">
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
                                    <div className="size-14 items-center flex justify-center">
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
                                    <button onClick={() => handleDelete(item?._id)} className="btn btn-sm btn-ghost text-white bg-[#B91C1C]">
                                        <RiDeleteBin6Line size={12} />
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;