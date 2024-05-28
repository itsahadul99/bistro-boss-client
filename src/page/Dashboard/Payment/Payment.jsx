import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
    const stripPromise = loadStripe(import.meta.env.VITE_PUblish_key)
    return (
        <div>
            <SectionTitle heading={"Payment Now"} subHeading={"Please Payment"} />
            <div className="w-full md:w-1/2 mx-auto border p-5 md:p-12 mt-5 md:mt-16 space-y-3">
                <Elements stripe={stripPromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;