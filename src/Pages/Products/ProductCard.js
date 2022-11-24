import React from 'react';

const ProductCard = ({product}) => {
    const {img,seller_name, title, resale_price, original_price, location, description, condition, phone} = product;
    return (
      <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto my-10">
        <figure className='w-2/4'>
          <img src={img} alt="Album" className="w-96 h-64" />
        </figure>
        <div className="card-body w-3/4">
          <h2 className="card-title font-bold text-2xl">{title}</h2>
          <div>
            <div>
              <p>
                <span className="font-semibold">Features:</span> {description}
              </p>
              <p>
                <span className="font-semibold">Condition:</span> {condition}
              </p>
              <p>
                <span className="font-semibold">Original Price:</span> {original_price}{" "}
              </p>
              <p>
                <span className="font-semibold">Resale Price:</span> {resale_price}{" "}
              </p>
            </div>
            <div>
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
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;