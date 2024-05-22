import useAuth from "../../../hooks/Auth/useAuth";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import useCart from "../../../hooks/Cart/useCart";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const FoodCard = ({ item }) => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { image, name, price, recipe, } = item;
    const [, refetch] = useCart()
    const handleCart = food => {
        const foodItem = {
            email: user.email,
            image: food.image,
            name: food.name,
            price: food.price,
            menuId: food._id,
        }
        // axios.post(`http://localhost:5000/carts`, foodItem)
        // .then((res) => {
        //     if (res.data.insertedId) {

        //         toast.success("Successfully added food on cart")
        //     }
        // }).catch(err => console.log(err))
        axiosSecure.post('/carts', foodItem)
            .then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Successfully!",
                        text: "You successfully added this item",
                        icon: "success"
                    });
                    // update the ui for add cart count 
                    refetch()
                }
            }).catch(err => console.log(err))
    }
    return (
        <div className="card md:w-96 border shadow-sm relative">
            <figure>
                <img className="w-full h-[150px] md:h-[250px] bg-cover" src={image} alt="salad carry" />
            </figure>
            <p className="text-sm md:text-lg font-inter font-semibold px-2 py-1 bg-black text-white absolute right-5 top-5 rounded-lg">${price}</p>
            <div className="card-body text-center">
                <h2 className="text-[#151515] text-lg md:text-2xl font-semibold">{name}</h2>
                <p className="text-xs md:text-sm font-medium text-[#151515]">{recipe}</p>
                <div className="mt-3">
                    <button onClick={() => handleCart(item)} className="rounded-md px-3 py-2 font-semibold bg-gray-100 border-b-2 border-b-[#BB8506] text-[#BB8506] hover:bg-[#1F2937]">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;