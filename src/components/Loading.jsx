import loader3 from '../assets/others/loader3.gif';
const Loading = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <img src={loader3} />
            <h1 className='text-xl font-cinzel font-bold'>Please Wait...</h1>
        </div>
    );
};

export default Loading;