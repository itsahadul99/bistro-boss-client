import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './AxiosSecure/useAxiosSecure';
import useAuth from './Auth/useAuth';

const useReview = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['review', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/review?email=${user?.email}`)
            return data;
        },
    })
    return [reviews, refetch]
};

export default useReview;