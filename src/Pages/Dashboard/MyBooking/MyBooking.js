import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../component/Loader";
import { AuthContext } from "../../../context/AuthProvider";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/booking?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("tech-token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={i} className="hover">
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={booking?.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{booking.title}</td>
                <td>{booking.price}</td>

                <td>
                  <Link to={`/dashboard/payment/${booking._id}`}>
                    <button  className="btn btn-sm border-0 bg-gradient-to-r from-blue-700 to-gray-500">
                      Pay
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
