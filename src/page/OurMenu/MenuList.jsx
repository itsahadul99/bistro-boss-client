/* eslint-disable react/prop-types */
const MenuList = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div className="flex gap-3 md:gap-5 lg:gap-8 space-y-2">
            <img style={
                {
                    borderRadius: '0px 200px 200px 200px'
                }} className="w-[118px] h-[104px]" src={image} alt="" />
            <div>
                <h3 className="text-lg md:text-xl font-cinzel">{name} ------------</h3>
                <p className="text-[#737373] font-inter">{recipe}</p>
            </div>
            <p className="text-[#BB8506] font-semibold">${price}</p>
        </div>
    );
};

export default MenuList;