import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import useAxiosCommon from "../../hooks/AxiosCommon/useAxiosCommon";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/Auth/useAuth";

const Google = () => {
    const {signInWithGoogle} = useAuth()
    const axiosCommon = useAxiosCommon()
    const navigate = useNavigate()
    const handleGoggleSignIn = () => {
        signInWithGoogle()
            .then((res) => {
                const userInfo = { name: res.user?.displayName, email: res.user?.email }
                axiosCommon.post('/users', userInfo)
                    .then(() => {
                        navigate('/')
                        toast.success('Successfully login')
                    })
            })
    }
    return (
        <div>
            <button onClick={handleGoggleSignIn} className='disabled:cursor-not-allowed mx-auto flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                <FcGoogle size={32} />
                <p>Continue with Google</p>
            </button>
        </div>
    );
};

export default Google;