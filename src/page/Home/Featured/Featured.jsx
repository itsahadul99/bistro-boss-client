import SectionTitle from "../../../components/SectionTitle";
import img from '../../../assets/home/featured.jpg';
const Featured = () => {
    return (
        <div className="relative">
            <div className="absolute bg-[#151515] bg-opacity-10 w-full h-full"></div>
            <div className="my-5 md:my-10 bg-no-repeat bg-fixed p-10" style={{ backgroundImage: `url(${img})` }}>
                <div className="py-10 max-w-7xl mx-auto text-white">
                    <SectionTitle heading="From Our menu" subHeading="Check it out" />
                    <div className="flex justify-center gap-5 md:gap-10 my-5 md:my-10">
                        <img className="z-30 w-[300px] h-[200px]" src={img} alt="" />
                        <div className="w-full md:w-1/2 z-10">
                            <h4 className="text-sm md:text-lg font-medium">March 20, 2023</h4>
                            <h2 className="text-lg md:text-2xl font-medium">WHERE CAN I GET SOME?</h2>
                            <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className="rounded-md px-3 py-2 font-semibold border-b-2 border-b-black mt-5 shadow-sm">Read More </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;