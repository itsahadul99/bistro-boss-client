/* eslint-disable react/prop-types */
const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item;
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
                    <button className="rounded-md px-3 py-2 font-semibold bg-gray-100 border-b-2 border-b-[#BB8506] text-[#BB8506]">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;