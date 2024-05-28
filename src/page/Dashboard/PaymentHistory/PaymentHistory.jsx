import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import useAuth from "../../../hooks/Auth/useAuth";
import Loading from "../../../components/Loading";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {data: history = [], isLoading} = useQuery({
        queryKey: ['history', user?.email],
        queryFn: async() => {
            const {data} = await axiosSecure.get(`/paymentHistory/${user?.email}`)
            return data
        }
    })
    if(isLoading){
        return <Loading />
    }
    return (
        <div>
            <SectionTitle heading={"Payment History?"} subHeading={"At a Glance!"} />
            <div className="overflow-x-auto overflow-y-auto p-8 shadow-sm mt-12 bg-white">
                <div className="text-[#151515] font-bold my-5 text-2xl uppercase ">
                    <h1>Total Payments: {history.length}</h1>
                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-inter uppercase bg-[#D1A054] text-white">
                            <th>
                            </th>
                            <th>EMAIL</th>
                            <th>CATEGORY</th>
                            <th>TOTAL PRICE</th>
                            <th>PAYENT DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map((item, idx) => <tr key={item?._id}>
                                <th>
                                    {idx + 1}
                                </th>
                                <td>
                                {"Food Order"}
                                </td>
                                <td>
                                    {item?.email}
                                </td>
                                <td>
                                    $ {item?.price}
                                </td>
                                <td>
                                    {new Date(item.date).toLocaleDateString()}
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;