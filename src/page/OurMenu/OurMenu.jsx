import banner from '../../assets/menu/banner3.jpg';
import SectionTitle from '../../components/SectionTitle';
import useFetchData from '../../hooks/FetchData/useFetchData';
import MenuList from './MenuList';
const OurMenu = () => {
    const [menu] = useFetchData();
    const salad = menu.filter(i => i.category === 'salad')
    const soup = menu.filter(i => i.category === 'soup')
    const dessert = menu.filter(i => i.category === 'dessert')
    const pizza = menu.filter(i => i.category === 'pizza')
    const offered = menu.filter(i => i.category === 'offered')
    return (
        <div>
            <div className="hero min-h-[calc(100vh-200px)]" style={{ backgroundImage: `url("${banner}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center font-inter m-10">
                    <div className=" w-[450px] lg:p-16 bg-[#15151599]">
                        <h1 className="mb-5 text-xl md:text-2xl lg:text-5xl font-bold text-white font-cinzel uppercase">Our Menu</h1>
                        <h4 className="text-sm text-white font-semibold font-cinzel uppercase">Would you like to try a dish</h4>
                    </div>
                </div>
            </div>
            {/* todays offer */}
            <div className='max-w-7xl mx-auto my-5 md:my-10'>
                <SectionTitle heading={"Today's Offer"} subHeading={"Don't miss"} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center my-5 lg:my-10">
                    {
                        offered.map(item => <MenuList key={item._id} item={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurMenu;