
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/AxiosSecure/useAxiosSecure';
import useCart from '../../../hooks/Cart/useCart';
import useAuth from '../../../hooks/Auth/useAuth';
const CheckoutForm = () => {
    const [cart] = useCart()
    const stripe = useStripe();
    const elements = useElements();
    const totalPrice = cart.reduce((total, items) => total + items.price, 0)
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("")
    const [error, setError] = useState('')
    const { user } = useAuth()

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice])
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod(
            {
                type: 'card',
                card
            }
        );
        if (error) {
            setError(error)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }
        // confirm method
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log(confirmError);
        }
        else {
            console.log(paymentIntent);
            
        }

    };

    return (
        <form className='space-y-2 md:space-y-5 *:border *:p-3 rounded-sm' onSubmit={handleSubmit}>
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
                className="btn bg-[#D1A054] font-cinzel font-medium text-lg text-white"
                type="submit"
                disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm