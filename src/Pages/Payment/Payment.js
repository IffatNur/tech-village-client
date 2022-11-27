import React from 'react';
import useTitle from '../../Title/Title';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);
const Payment = () => {
    useTitle("Payment");
    const booking = useLoaderData();
    const { img, price, title } = booking;
    return (
      <div className="shadow-xl w-11/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2  mx-10 my-10">
          <div className="p-5 h-64">
            <img src={img} alt="" className='h-full'></img>
          </div>
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-xl font-semibold">Price: {price}</p>
            <Elements stripe={stripePromise}>
              <CheckoutForm booking={booking}></CheckoutForm>
            </Elements>
          </div>
        </div>
      </div>
    );
};

export default Payment;