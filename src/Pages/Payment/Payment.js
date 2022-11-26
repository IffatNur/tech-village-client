import React from 'react';
import useTitle from '../../Title/Title';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);
const Payment = () => {
    useTitle("Payment");
    return (
        <div>
            
        </div>
    );
};

export default Payment;