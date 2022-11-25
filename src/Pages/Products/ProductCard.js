import React, { useState } from 'react';
import BookingModal from '../../component/BookingModal';

const ProductCard = ({ product, setBookProduct}) => {
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
  } = product;
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto my-10">
      <figure className="lg:w-2/4">
        <img src={img} alt="Album" className="w-96 h-64" />
      </figure>
      <div className="card-body lg:w-3/4">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
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
              <span className="font-semibold">Posted on:</span> {posted? posted: date}
            </small>
          </div>
        </div>
        <div className="card-actions justify-end">
          <label
            htmlFor="book-modal"
            className="btn border-0 bg-gradient-to-r from-blue-700 to-gray-500"
            onClick={()=>setBookProduct(product)}
          >
            Book Now
          </label>
          <button className="btn">Report to Admin</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;