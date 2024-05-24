import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosCommon from "../../../hooks/AxiosCommon/useAxiosCommon";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import toast from "react-hot-toast";

const AddItem = () => {
    const {
        register,
        handleSubmit,
        reset,
        // eslint-disable-next-line no-unused-vars
        formState: { errors },
    } = useForm();
    const axiosCommon = useAxiosCommon()
    const axiosSecure = useAxiosSecure()
    const onSubmit = (data) => {
        const imgFile = { image: data.image[0] }
        try {
            axiosCommon.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMBB_API}`, imgFile, {
                headers: {
                    "content-type": "multipart/form-data",
                }
            })
                .then(res => {
                    console.log(res.data.data.display_url)
                    const imageUrl = res.data.data.display_url;
                    const menuData = {
                        recipe: data.details,
                        name: data.recipeName,
                        category: data.category,
                        price: parseFloat(data.price),
                        image: imageUrl,
                    }
                    axiosSecure.post('/menu', menuData)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.insertedId) {
                                reset()
                                toast.success("Item added successfully")
                            }
                        })
                })

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <SectionTitle heading={"Add an Item"} subHeading={"What's new?"} />
            <div className="my-5 p-5 md:p-10 bg-[#F3F3F3] mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className='flex justify-between items-center gap-5'>
                        <div className='flex-1 space-y-3'>
                            <label className="text-xl">Recipe name*</label>
                            <input type="text" {...register('recipeName', { required: true })} placeholder="Enter Recipe Name" className="w-full rounded-md p-5 bg-white font-normal" />
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-5'>
                        <div className='flex-1 space-y-3'>
                            <label className="text-xl">Category*</label>
                            <select type="text" {...register('category', { required: true })} className="w-full rounded-md p-5 bg-white font-normal" >
                                <option value="Category">Category</option>
                                <option value="salad">Salad</option>
                                <option value="soup">Soup</option>
                                <option value="pizza">Pizza</option>
                                <option value="drinks">Drinks</option>
                                <option value="dessert">Desserts</option>
                            </select>
                        </div>
                        <div className='flex-1 space-y-3'>
                            <label className="text-xl">Price*</label>
                            <input type="number" {...register('price', { required: true })} className="w-full rounded-md p-5 bg-white font-normal" />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-xl">Recipe Details*</label>
                        <textarea type="text"{...register('details')} placeholder="Recipe Details" className="w-full rounded-md p-5 bg-white font-normal" />
                    </div>
                    <div>
                        <input type="file" {...register('image')} className="file-input w-full max-w-xs" />
                    </div>
                    <div>
                        <input type='submit' value="Add Item" className='text-center cursor-pointer max-w-xs border-2 text-xl bg-[#D2B48C] p-2'></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;