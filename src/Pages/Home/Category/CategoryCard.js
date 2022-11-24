import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const { category_title, image, _id } = category;
  return (
    <div>
      <div className="card w-96 shadow-xl image-full border-y-8 border-yellow-700 h-72 mx-auto">
        <figure >
          <img src={image} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-5xl text-blue-200">
            {category_title}
          </h2>
          <p>To explore available products click on View Products.</p>
          <div className="card-actions justify-end">
            <Link to={`category/${_id}`}>
              <button className="btn glass text-yellow-200">
                View Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;