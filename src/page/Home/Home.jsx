import CallUs from "../../components/CallUs";
import Banner from "./Banner/Banner";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import OurMenu from "./Menu/OurMenu";
import Order from "./Order/Order";

const Home = () => {
    return (
        <div>
            <Banner />
            <Order /> 
            <OurMenu /> 
            <CallUs /> 
            <ChefRecommends />        
        </div>
    );
};

export default Home;