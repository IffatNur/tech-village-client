import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const { category_title, image, _id } = category;
  return (
    <div>
      <div className="card w-96 image-full h-72 mx-auto">
        <figure>
          <img src={image} alt="Shoes" className="w-full " />
        </figure>
        <div className="card-body">
          <div className="border-2 rounded-xl p-5 pb-12">
            <h2 className="card-title text-5xl mb-3 text-yellow-500">
              {category_title}
            </h2>
            <p className="text-yellow-300">
              To explore available products click on View Products.
            </p>
            <div className="card-actions justify-end">
              <Link to={`category/${_id}`}>
                <button className="btn glass text-blue-100">
                  View Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;