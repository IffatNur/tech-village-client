import { useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({product}) => {
    const {contact, email, name,locaiton,price} = product;
    const stripe = useStripe();
    const elements = useElements();
    const [secret, setSecret] = useState('');
    useEffect(() => {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {
          setSecret(data.clientSecret);
        });
    }, [price]);
    return (
        <div>
            
        </div>
    );
};

export default CheckoutForm;