import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import { FaUsers } from "react-icons/fa";

const AllUser = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const {data} = await axiosSecure.get('/users')
            return data
        }
    })
    const handleDelete = (id) => {

    }
    return (
        <div>
            <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"My cart"} />
            <div className="overflow-x-auto overflow-y-auto p-8 shadow-sm mt-12 bg-white">
                <div className="text-[#151515] font-bold my-5 flex justify-evenly text-2xl font-cinzel uppercase items-center">
                    <h1>Total Order: {users.length}</h1>
                    <h1>Total price: $</h1>
                    <button className="btn bg-[#D1A054] font-cinzel font-medium text-lg text-white">Pay</button>

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
                                    ${user?.email}
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-ghost text-white bg-[#D1A054]">
                                        <FaUsers size={12}/>
                                    </button>
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