
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/AxiosSecure/useAxiosSecure';
import useCart from '../../../hooks/Cart/useCart';
import useAuth from '../../../hooks/Auth/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const CheckoutForm = () => {
    const [cart, refetch] = useCart()
    const stripe = useStripe();
    const elements = useElements();
    const totalPrice = cart.reduce((total, items) => total + parseFloat(items?.price), 0)
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("")
    const [error, setError] = useState('')
    const { user } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
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
            if(paymentIntent.status === 'succeeded'){
                // save the payment data on db
                const payment = {
                    email: user?.email,
                    name: user?.displayName,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item?.menuId),
                    status: 'pending'
                }
                const {data} = await axiosSecure.post('/payments', payment)
                refetch()
                if (data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you purchasing our food",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/payment-history')
                }
                
            }
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
            {error && <p className='text-red-400'>{error?.message}</p>}
        </form>
    );
};

export default CheckoutForm