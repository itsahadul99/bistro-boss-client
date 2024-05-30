import SectionTitle from "../../../components/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import { MdOutlineRocketLaunch } from "react-icons/md";
import useAuth from "../../../hooks/Auth/useAuth";
import toast from "react-hot-toast";
import useAxiosCommon from "../../../hooks/AxiosCommon/useAxiosCommon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Review = () => {
    const [rating, setRating] = useState(0);

    const { user } = useAuth()
    const axiosCommon = useAxiosCommon()
    const navigate = useNavigate()
    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target;
        const recipe = form.recipe.value;
        const suggestion = form.suggestion.value;
        const review = form.review.value;
        const reviewData = {
            recipe,
            suggestion,
            rating: rating,
            details: review,
            name: user?.displayName
        }
        console.table(reviewData)
        try {
            const { data } = await axiosCommon.post('/review', reviewData)
            if (data?.insertedId) {
                toast.success('Thanks for share your feedback')
                navigate('/')
            }
        } catch (error) {
            toast.error(error?.message)
        }
    }
    console.log(rating);
    return (
        <div>
            <SectionTitle heading={"Add Review"} subHeading={"Sharing is Caring!!!"} />
            <div className="bg-[#F3F3F3] mt-5 p-5 md:p-10 shadow-sm border rounded-md">
                <div className="text-center my-1">
                    <h1 className="text-xl md:text-2xl font-cinzel font-medium">Rate Us</h1>
                </div>
                <form onSubmit={handleSubmit} className="w-full mx-auto md:w-3/4 space-y-3">
                    <div className="flex justify-center items-center">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            onChange={setRating}
                            isRequired
                        />
                    </div>
                    <div className="font-inter space-y-2">
                        <label htmlFor="recipe" className="block font-bold">Which recipe you liked most?</label>
                        <input type="text" name="recipe" className="w-full p-3 text-sm rounded-sm" placeholder="Recipe you liked most" />
                    </div>
                    <div className="font-inter space-y-2">
                        <label htmlFor="suggestion" className="block font-bold">Do you have any suggestion for us?</label>
                        <input type="text" name="suggestion" className="w-full p-3 text-sm rounded-sm" placeholder="Sugggestion" />
                    </div>
                    <div className="font-inter space-y-2">
                        <label htmlFor="review" className="block font-bold">Kindly express your care in a short way.</label>
                        <textarea type="text" name="review" className="w-full h-36 p-3 text-sm rounded-sm" placeholder="Review in detail" />
                    </div>
                    <button type="submit" className="bg-gradient-to-r from-[#835D23] to-[#B58130] flex items-center gap-2 px-5 py-2 text-lg font-bold text-white mt-3">Send Review <MdOutlineRocketLaunch /></button>
                </form>
            </div>
        </div>
    );
};

export default Review;