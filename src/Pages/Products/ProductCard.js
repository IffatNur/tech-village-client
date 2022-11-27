import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaChevronCircleDown } from 'react-icons/fa';
import BookingModal from '../../component/BookingModal';
import { AuthContext } from '../../context/AuthProvider';

const ProductCard = ({ product, setBookProduct}) => {
  const {user} = useContext(AuthContext);
  const {
    img,
    seller_name,
    title,
    resale_price,
    original_price,
    location,
    description,
    condition,
    phone,
    posted,
    _id
  } = product;
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const handleReport = () =>{
    const itemInfo = {
      product_id: _id,
      img,
      seller_name,title,resale_price
    }
    fetch(`http://localhost:5000/report`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("tech-token")}`,
      },
      body: JSON.stringify(itemInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
          toast.success("Thanks For Your Feedback");
        }
      });
  }
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto my-10">
      <figure className="lg:w-2/4">
        <img src={img} alt="Album" className="w-96 h-64" />
      </figure>
      <div className="card-body lg:w-3/4">
        <h2 className="card-title font-bold text-2xl">
          {title}
          {product.isVerified && (
            <FaChevronCircleDown className="ml-1 text-blue-700"></FaChevronCircleDown>
          )}
        </h2>
        <div>
          <div className="mb-5">
            <p>
              <span className="font-semibold">Features:</span> {description}
            </p>
            <p>
              <span className="font-semibold">Condition:</span> {condition}
            </p>
            <p>
              <span className="font-semibold">Original Price:</span>{" "}
              {original_price}{" "}
            </p>
            <p>
              <span className="font-semibold">Resale Price:</span>{" "}
              {resale_price}{" "}
            </p>
          </div>
          <hr />
          <div className="mt-5 text-gray-500">
            <small>
              <span className="font-semibold">Seller:</span> {seller_name} |
            </small>
            <small>
              {" "}
              <span className="font-semibold">Contact:</span> {phone} |
            </small>
            <small>
              {" "}
              <span className="font-semibold">Location:</span> {location}
            </small>
            <br />
            <small>
              {" "}
              <span className="font-semibold">Posted on:</span>{" "}
              {posted ? posted : date}
            </small>
          </div>
        </div>
        <div className="card-actions justify-end">
          {user?.email && (
            <label
              htmlFor="book-modal"
              className="btn border-0 bg-gradient-to-r from-blue-700 to-gray-500"
              onClick={() => setBookProduct(product)}
            >
              Book Now
            </label>
          )}

          <button className="btn" onClick={() => handleReport(_id)}>
            Report to Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;