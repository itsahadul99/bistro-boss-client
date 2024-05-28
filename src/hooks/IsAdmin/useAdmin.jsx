import { useQuery } from "@tanstack/react-query";
import useAuth from "../Auth/useAuth";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";

const useAdmin = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/users/admin/${user?.email}`)
            return data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;