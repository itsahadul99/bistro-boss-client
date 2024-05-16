/* eslint-disable react/prop-types */
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center max-w-7xl mx-auto">
            <p className="text-[#D99904] font-semibold text-sm md:text-lg font-inter italic">---{subHeading}---</p>
            <h1 className="text-xl md:text-3xl lg:text-4xl mt-2 font-bold font-inter uppercase">{heading}</h1>
        </div>
    );
};

export default SectionTitle;