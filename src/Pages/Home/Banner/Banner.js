import React from 'react';
import Background from '../../../asset/bgvid.mp4';
import './Banner.css';

const Banner = () => {
    return (
      <div>
        <video loop autoPlay muted>
          <source src={Background} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="text-center home-content flex flex-wrap py-44 justify-center items-center lg:h-[700px] ">
          <div className="">
            <h1 className="font-semibold text-gray-200 text-3xl mb-5">
              Best Buy and Resale Site
            </h1>{" "}
            <hr className="w-3/4 mx-auto" />
            <h3 className="font-bold text-5xl text-yellow-500 my-7">
              Free Shipping & Delivery
            </h3>
            <button className="btn btn-outline btn-warning">Explore</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;