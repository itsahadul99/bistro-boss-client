import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const handleCheckForm = async e => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (!card) {
            return;
        }
        // make a payment method
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if(error){
            console.log(error);
        }else{
            console.log(paymentMethod);
        }
    }
    return (
        <form className="w-full p-3 md:p-10 border shadow-md rounded-md md:w-1/2 mx-auto mt-5 *:border *:p-3 *:border-blue-400 *:rounded-md md:mt-16" onSubmit={handleCheckForm}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                type="submit"
                className="btn bg-[#D1A054] font-cinzel font-medium text-lg text-white mt-5"
                disabled={!stripe}
            >
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;