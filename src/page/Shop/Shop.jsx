import { useState } from 'react';
import banner from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useFetchData from '../../hooks/FetchData/useFetchData';
import FoodCard from './Food/FoodCard';
import { useParams } from 'react-router-dom';
const Shop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const initializedIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initializedIndex)
    const [menu] = useFetchData();
    const salad = menu.filter(i => i.category === 'salad')
    const soup = menu.filter(i => i.category === 'soup')
    const dessert = menu.filter(i => i.category === 'dessert')
    const pizza = menu.filter(i => i.category === 'pizza')
    const drinks = menu.filter(i => i.category === 'drinks')
    return (
        <div>
            <div className="hero min-h-[calc(100vh-200px)]" style={{ backgroundImage: `url("${banner}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center font-inter m-10">
                    <div className=" lg:w-[450px] lg:p-16 bg-[#15151599]">
                        <h1 className="mb-5 text-xl md:text-2xl lg:text-5xl font-bold text-white font-cinzel uppercase">Our Shop</h1>
                        <h4 className="text-sm text-white font-semibold font-cinzel uppercase">Would you like to try a dish</h4>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto mb-5 md:mb-10'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className='flex justify-center items-center my-5 md:my-8 lg:my-12'>
                        <TabList>
                            <Tab>SALAD</Tab>
                            <Tab>PIZZA</Tab>
                            <Tab>SOUPS</Tab>
                            <Tab>DESSERTS</Tab>
                            <Tab>DRINKS</Tab>
                        </TabList>
                    </div>
                    {
                        !tabIndex ? '' : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 items-center'>
                        {
                            menu.slice(0, 15).map(item => <FoodCard key={item._id} item={item} />)
                        }
                    </div> }
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 items-center'>
                            {
                                salad.map(item => <FoodCard key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 items-center'>
                            {
                                pizza.map(item => <FoodCard key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 items-center'>
                            {
                                soup.map(item => <FoodCard key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 items-center'>
                            {
                                dessert.map(item => <FoodCard key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 items-center'>
                            {
                                drinks.map(item => <FoodCard key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;