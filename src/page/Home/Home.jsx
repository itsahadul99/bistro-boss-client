import CallUs from "../../components/CallUs";
import Banner from "./Banner/Banner";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import Featured from "./Featured/Featured";
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
            <Featured />      
        </div>
    );
};

export default Home;