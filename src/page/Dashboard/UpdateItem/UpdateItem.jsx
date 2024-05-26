import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { useLoaderData, useNavigate, } from "react-router-dom";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateItem = () => {
    const axiosSecure = useAxiosSecure()
    const loadedData = useLoaderData()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        // eslint-disable-next-line no-unused-vars
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axiosSecure.patch(`/menu/update/${loadedData._id}`, data)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            reset()
                            navigate('/dashboard/manageItems')
                        }
                    })
                Swal.fire("Updated!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }
    return (
        <div>
            <SectionTitle heading={"Update an Item"} subHeading={"Update now"} />
            <div className="my-5 p-5 md:p-10 bg-[#F3F3F3] mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className='flex justify-between items-center gap-5'>
                        <div className='flex-1 space-y-3'>
                            <label className="text-xl">Recipe name*</label>
                            <input defaultValue={loadedData.name} type="text" {...register('recipeName',)} placeholder="Enter Recipe Name" className="w-full rounded-md p-5 bg-white font-normal" />
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-5'>
                        <div className='flex-1 space-y-3'>
                            <label className="text-xl">Category*</label>
                            <select type="text" defaultValue={loadedData.category} {...register('category',)} className="w-full rounded-md p-5 bg-white font-normal" >
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
                            <input type="number" defaultValue={loadedData.price} {...register('price',)} className="w-full rounded-md p-5 bg-white font-normal" />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-xl">Recipe Details*</label>
                        <textarea type="text"{...register('details', { required: true })} placeholder="Recipe Details" className="w-full rounded-md p-5 bg-white font-normal" />
                    </div>
                    <div className="text-center">
                        <input type='submit' value="Update Recipe Details" className='text-center cursor-pointer max-w-xs border-2 text-xl bg-[#D2B48C] p-2'></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;