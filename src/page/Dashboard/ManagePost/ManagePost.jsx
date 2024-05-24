import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle";
import useFetchData from "../../../hooks/FetchData/useFetchData";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
// import useAuth from "../../../hooks/Auth/useAuth";

const ManagePost = () => {
    // const {user} = useAuth();
    const axiosSecure = useAxiosSecure()
    // eslint-disable-next-line no-unused-vars
    const [menu, loading, refetch] = useFetchData()
    const handleDelete = (id) => {
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
                axiosSecure.delete(`/menu/${id}`)
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
    const handleUpdate = id => {
        console.log('update soon', id);
    }
    return (
        <div>
            <SectionTitle heading={"MANAGE ALL ITEMS"} subHeading={"Hurry UP"} />
            <div className="overflow-x-auto overflow-y-auto p-8 shadow-sm mt-12 bg-white">
                <div className="text-[#151515] font-bold my-5 text-2xl font-cinzel uppercase">
                    <h1>Total Items: {menu.length}</h1>
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
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, idx) => <tr key={item?._id}>
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
                                    <button onClick={() => handleUpdate(item?._id)} className="btn btn-sm btn-ghost text-white bg-[#D1A054] text-center">
                                        <FaEdit size={12} />
                                    </button>
                                </th>
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

export default ManagePost;