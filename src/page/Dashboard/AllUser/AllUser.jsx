import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/users')
            return data
        }
    })
    const handleRuleUser = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",
            cancelButtonColor: "#B91C1C",
            confirmButtonText: "Yes, make admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        if (res.data.matchedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Success!",
                                text: "This user is now an Admin",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",
            cancelButtonColor: "#B91C1C",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Successfully delete this user",
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
                <div className="text-[#151515] font-bold my-5 text-2xl uppercase ">
                    <h1>Total User: {users.length}</h1>
                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-inter uppercase bg-[#D1A054] text-white">
                            <th>
                            </th>
                            <th>NAME</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user?._id}>
                                <th>
                                    {idx + 1}
                                </th>
                                <td>
                                    {user?.name}
                                </td>
                                <td>
                                    {user?.email}
                                </td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'Admin' : <button
                                            onClick={() => handleRuleUser(user._id)}
                                            className="btn btn-sm btn-ghost text-white bg-[#D1A054]">
                                            <FaUsers size={12} />
                                        </button>
                                    }
                                </td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(user?._id)}
                                        className="btn btn-sm btn-ghost text-white bg-[#B91C1C]">
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

export default AllUser;