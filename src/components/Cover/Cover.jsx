/* eslint-disable react/prop-types */
const Cover = ({ img, title, description }) => {
    return (
        <div>
            <div className="hero lg:min-h-[500px] my-5 md:my-10 lg:my-16" style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center font-inter bg-white m-10">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-xl md:text-2xl">{title}</h1>
                        <p className="mb-5 text-sm">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;