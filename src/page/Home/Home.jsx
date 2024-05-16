import Banner from "./Banner/Banner";
import OurMenu from "./Menu/OurMenu";
import Order from "./Order/Order";

const Home = () => {
    return (
        <div>
            <Banner />
            <Order /> 
            <OurMenu />          
        </div>
    );
};

export default Home;