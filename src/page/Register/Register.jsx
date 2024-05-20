/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom"
import resImg from '../../assets/others/authentication2.png';
import bgImg from '../../assets/others/authentication.png';
import useAuth from "../../hooks/Auth/useAuth";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
const Register = () => {
    const {createUser, updateUserProfile} = useAuth()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data.email, data.password);

        createUser(data.email, data.password)
        .then(() => {
        })
        updateUserProfile(data.name, data.photo)
        .then(() => {
            navigate('/')
            toast.success("Successfully sign up")
        })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'
            style={{
                backgroundImage: `url(${bgImg})`,
            }} >
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-xl lg:max-w-4xl '
                style={{
                    backgroundImage: `url(${bgImg})`,
                }}>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img
                            className='w-auto h-7 sm:h-8'
                            src='logo.png'
                            alt=''
                        />
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            or Registration with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'
                            >
                                Username
                            </label>
                            <input
                                id='name'
                                autoComplete='name'
                                {...register('name', { required: true })}
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                            {errors.name?.type === "required" && (
                                <p className="mt-2 text-red-600">Name is required</p>
                            )}
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='photo'
                            >
                                Photo URL
                            </label>
                            <input
                                id='photo'
                                autoComplete='photo'
                                name='photo'
                                {...register('photo')}
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email'
                                {...register('email', { required: true })}
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                            {errors.email?.type === "required" && (
                                <p className="mt-2 text-red-600">Em,ail is required</p>
                            )}
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
                                id='loggingPassword'
                                autoComplete='current-password'
                                name='password'
                                {...register('password',
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/
                                    })}
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                            />
                            {errors.password?.type === "required" && (
                                <p className="mt-2 text-red-600">Password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="mt-2 text-red-600">Password must be at least 6 characters</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="mt-2 text-red-600">Password length max 20 characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="mt-2 text-red-600">Password must be one lowercase, one uppercase and one number</p>
                            )}
                        </div>
                        <div className='mt-6'>
                            <input
                                type='submit'
                                value="Sign in"
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            />
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or sign in
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
                <div
                    className='hidden bg-cover bg-center lg:block'
                >
                    <img className="flex items-center justify-center p-10 h-full" src={resImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Register
