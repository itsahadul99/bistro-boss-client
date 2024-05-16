import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { useEffect } from "react";
import MenuCard from "./MenuCard";

const OurMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popular = data.filter(i => i.category === 'popular');
            setMenu(popular)
        })
    }, [])
    console.log(menu);
    return (
        <div className="max-w-7xl mx-auto my-5 md:my-10">
            <SectionTitle heading='our menu' subHeading='check it out' />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center my-5 lg:my-10">
                {
                 menu.map(item => <MenuCard item={item} key={item._id} />)
                }
            </div>
        </div>
    );
};

export default OurMenu;