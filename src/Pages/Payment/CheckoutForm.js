import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const CheckoutForm = ({booking}) => {
    const { contact, email, name, location, price, _id, product_id } = booking;
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [secret, setSecret] = useState('');
    const [paymentError, setPaymentError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')
    useEffect(() => {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("tech-token")}`,
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {
          setSecret(data.clientSecret);
        });
    }, [price]);

    const handleSubmit = async (event)=>{
      setTransactionId("");
      event.preventDefault();
      if(!stripe || !elements){
        return;
      }

      const card = elements.getElement(CardElement);
      if(card === null){
        return;
      } 

      const {error} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      })

      if(error){
        console.log(error);
        setPaymentError(error);
      }
      else{
        setPaymentError('');
      }

      setSuccess("");
      setProcessing(true);
      const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(secret, {
        payment_method:{
          card: card,
          billing_details:{
            name: name,
            email
          }
        }
      })

      if(confirmError){
        setPaymentError(confirmError.message);
        return;
      }

      if(paymentIntent.status === 'succeeded'){
        const buyerInfo = {
          name,
          email,
          transaction_id: paymentIntent.id,
          booking_id: _id,
          product_id,
        };
        fetch(`http://localhost:5000/payment`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem('tech-token')}`
          },
          body: JSON.stringify(buyerInfo),
        })
        .then(res => res.json())
        .then(data=>{
          console.log(data);
          if (data.acknowledged){
            setSuccess("Congratulation!");
            setTransactionId(paymentIntent.id);
            toast.success('Congratulation! Payment Successful.');
            navigate('/dashboard');
          } 
        });
      }
      setProcessing(false); 
    }

    return (
      <div>
        <>
          <form onSubmit={handleSubmit}>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
            <button
              className="btn border-0 bg-gradient-to-r from-blue-600 to-blue-800 btn-sm mt-5"
              type="submit"
              disabled={!stripe || !secret || processing}
            >
              Confirm Payment
            </button>
          </form>
          {success && (
            <div>
              <p className="text-green-500">{success}</p>
              <p>
                Transaction ID:{" "}
                <span className="font-bold">{transactionId}</span>
              </p>
            </div>
          )}
          <p>{paymentError && <small>{paymentError.message}</small>}</p>
        </>
      </div>
    );
};

export default CheckoutForm;