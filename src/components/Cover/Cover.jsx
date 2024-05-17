/* eslint-disable react/prop-types */
const Cover = ({ img, title }) => {
    return (
        <div>
            <div className="hero lg:min-h-[500px] my-5 md:my-10 lg:my-16" style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center font-inter bg-[#15151599] text-white m-10">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-xl md:text-2xl lg:text-3xl uppercase font-cinzel font-semibold">{title}</h1>
                        <p className="mb-5 text-sm">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;