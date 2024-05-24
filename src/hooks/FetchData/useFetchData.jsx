import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../AxiosCommon/useAxiosCommon";

const useFetchData = () => {
    // const [loading, setLoading] = useState(true)
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setLoading(false)
    //         })
    // }, [])
    const axiosCommon = useAxiosCommon()
    const { data: menu = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/menu')
            return data
        }
    })
    return [menu, loading, refetch]
};

export default useFetchData;