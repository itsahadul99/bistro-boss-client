/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuList from "../MenuList";
import Cover from "../../../components/Cover/Cover";

const MenuCategory = ({ items, title, image }) => {
    return (
        <div className='max-w-7xl mx-auto my-5 md:my-10'>
            <Cover  title={title} img={image} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center mt-5 lg:mt-10">
                {
                    items.map(item => <MenuList key={item._id} item={item} />)
                }
            </div>
            <div className="text-center">
                <Link to={`/our-shop/${title}`}>
                    <button className="rounded-md px-3 py-2 font-semibold border-b-2 hover:bg-slate-200 border-b-black mt-5 shadow-sm">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;