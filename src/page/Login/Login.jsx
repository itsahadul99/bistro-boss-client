import { Link, useNavigate } from "react-router-dom";
import bgImg from '../../assets/others/authentication.png';
import login from '../../assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/Auth/useAuth";
import toast from "react-hot-toast";
import Google from "../../components/Social/Google";
const Login = () => {
    const { signIn } = useAuth()
    const [disabled, setDisabled] = useState(true)
    const captchaRef = useRef(null)
    const navigate = useNavigate()
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleCaptchaCode = () => {
        setDisabled(true)
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    const handleLogIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(() => {
                toast.success('Log in successfully')
                navigate('/')
            })
    }
    return (
        <div className='flex justify-center items-center min-h-screen' style={{
            backgroundImage: `url(${bgImg})`,
        }}>
            <div style={{
                backgroundImage: `url(${bgImg})`
            }} className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-sm shadow-2xl  lg:max-w-5xl '>
                <div
                    className='hidden bg-center lg:block'

                >
                    <img className="flex items-center justify-center p-10 h-full" src={login} alt="" />
                </div>

                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img
                            className='w-auto h-7 sm:h-8'
                            src='logo.png'
                            alt=''
                        />
                    </div>
                    <p className='mt-3 text-xl text-center text-gray-600 '>
                        Welcome back!
                    </p>
                    <div className='flex items-center justify-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Signup with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    {/* <button onClick={handleGoggleSignIn} className='disabled:cursor-not-allowed mx-auto flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                        <FcGoogle size={32} />
                        <p>Continue with Google</p>
                    </button> */}
                    <Google />
                    <form onSubmit={handleLogIn}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                required
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                        </div>
                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <input
                                required
                                id='loggingPassword'
                                autoComplete='current-password'
                                name='password'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                            />
                        </div>
                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                >
                                    <LoadCanvasTemplate />
                                </label>
                            </div>
                            <input
                                ref={captchaRef}
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                                placeholder="Write captcha"
                            />
                            <button onClick={handleCaptchaCode} className="btn btn-outline btn-xs mt-4">Validate Captcha</button>
                        </div>
                        <div className='mt-6'>
                            <button
                                disabled={disabled}
                                type='submit'
                                className={disabled ? "w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize btn " : 'w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#D1A054] rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'}
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/registration'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or sign up
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;