import CallUs from "../../components/CallUs";
import Banner from "./Banner/Banner";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import Featured from "./Featured/Featured";
import Order from "./Order/Order";
import PopularMenu from "./Popular Menu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner />
            <Order /> 
            <PopularMenu /> 
            <CallUs /> 
            <ChefRecommends />
            <Featured /> 
            <Testimonial />    
        </div>
    );
};

export default Home;