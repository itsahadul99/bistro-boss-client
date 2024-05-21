import { Link } from 'react-router-dom';
import error from '../../assets/404.gif';
import { FaHome } from 'react-icons/fa';
const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <img className='md:w-[350px] md:h-[400px]' src={error} alt="" />
            <button className='btn btn-sm text-white text-lg bg-[#D1A054]'><Link to='/' className='flex items-center gap-3'><FaHome /> Back to Home</Link></button>
        </div>
    );
};

export default ErrorPage;