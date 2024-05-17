import SectionTitle from "../../../components/SectionTitle";
import PopularMenuCard from "./PopularMenuCard";
import useFetchData from "../../../hooks/FetchData/useFetchData";

const PopularMenu = () => {
    const [menu] = useFetchData()
    const popular = menu.filter(i => i.category === 'popular')
    return (
        <div className="max-w-7xl mx-auto my-5 md:my-10">
            <SectionTitle heading='our menu' subHeading='check it out' />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center my-5 lg:my-10">
                {
                    popular.map(item => <PopularMenuCard item={item} key={item._id} />)
                }
            </div>
            <div className="text-center">
                <button className="border-b-4 border-b-[#1F2937] text-[#1F2937] hover:bg-gray-200 hover:rounded-md rounded-b-md px-2 py-1 font-semibold">View full menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;