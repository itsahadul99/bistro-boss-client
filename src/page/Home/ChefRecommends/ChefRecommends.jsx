import SectionTitle from "../../../components/SectionTitle";
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
const ChefRecommends = () => {
    return (
        <div className='max-w-7xl mx-auto my-5 md:my-10'>
            <SectionTitle heading="Chef Recommends" subHeading="Should try" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 items-center px-5 mt-5 md:mt-8 lg:mt-16">
                <div className="card md:w-96 border shadow-sm">
                    <figure>
                        <img className="w-full h-[200px] md:h-[350px] bg-cover" src={slide1} alt="salad carry" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-[#151515] text-lg md:text-2xl font-semibold">Caeser Salad</h2>
                        <p className="text-xs md:text-sm font-medium text-[#151515]">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="mt-3">
                            <button className="rounded-md px-3 py-2 font-semibold bg-gray-100 border-b-2 border-b-[#BB8506] text-[#BB8506]">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card md:w-96 border shadow-sm">
                    <figure>
                        <img className="w-full h-[200px] md:h-[350px] bg-cover" src={slide2} alt="salad carry" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-[#151515] text-lg md:text-2xl font-semibold">Caeser Salad</h2>
                        <p className="text-xs md:text-sm font-medium text-[#151515]">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="mt-3">
                            <button className="rounded-md px-3 py-2 bg-[#1F2937] font-semibold text-[#BB8506]">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card md:w-96 border shadow-sm">
                    <figure>
                        <img className="w-full h-[200px] md:h-[350px] bg-cover" src={slide3} alt="salad carry" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-[#151515] text-lg md:text-2xl font-semibold">Caeser Salad</h2>
                        <p className="text-xs md:text-sm font-medium text-[#151515]">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="mt-3">
                            <button className="rounded-md px-3 py-2 bg-gray-100 font-semibold border-b-2 border-b-[#BB8506] text-[#BB8506]">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;