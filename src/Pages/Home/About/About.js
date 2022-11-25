import React from 'react';
import { FaStar } from "react-icons/fa";

const About = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 w-full lg:w-3/4 mx-auto mb-10">
        <div className="mx-auto my-5 w-3/4 lg:w-full">
          <img
            src="https://i.ibb.co/7QsMkcN/christina-wocintechchat-com-rg1y72e-Kw6o-unsplash.jpg"
            alt=""
          ></img>
        </div>
        <div className="mx-auto my-5 w-3/4 lg:w-full text-center lg:text-left">
          <h1 className="text-4xl font-bold">About Us</h1>{" "}
          <hr className="lg:w-2/5 bg-yellow-400" />
          <p className="my-3 font-semibold text-xl">
            Our journey started in 2002. Our main priority is Customer
            satisfaction. We verify the sellers before letting them to post
            selling post.
          </p>
          <div className="stats stats-horizontal shadow my-5 ">
            <div className="stat">
              <div className="stat-title flex items-center font-semibold">
                <FaStar className="text-yellow-300"></FaStar>Sellers
              </div>
              <div className="stat-value text-blue-800">450+</div>
            </div>

            <div className="stat">
              <div className="stat-title flex items-center font-semibold">
                <FaStar className="text-yellow-300"></FaStar>New Registered
              </div>
              <div className="stat-value text-blue-800">1,100</div>
            </div>

            <div className="stat">
              <div className="stat-title flex items-center font-semibold">
                <FaStar className="text-yellow-300"></FaStar>Views
              </div>
              <div className="stat-value text-blue-800">1,000+</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;