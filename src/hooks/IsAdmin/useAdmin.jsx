import { useQuery } from "@tanstack/react-query";
import useAuth from "../Auth/useAuth";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";

const useAdmin = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: isAdmin} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(data.admin)
            return data?.admin;
        }
    })
    return [isAdmin]
};

export default useAdmin;