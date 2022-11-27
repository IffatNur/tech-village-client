import React from 'react';
import { useRouteError } from 'react-router';
import image from '../../asset/error.jpg';

const ErrorPage = () => {
    const error = useRouteError();
    return (
      <div>
        {error && (
          <div className="flex justify-evenly">
            <div>
              <img src={image} alt="" />
            </div>
            <div className="flex items-center">
              <div>
                <h1 className="text-8xl font-bold text-red-700">
                  {error?.status}
                </h1>
                <p className="text-4xl font-semibold">{error?.statusText}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default ErrorPage;