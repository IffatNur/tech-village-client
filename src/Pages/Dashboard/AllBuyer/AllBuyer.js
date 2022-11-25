import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../component/Loader';

const AllBuyer = () => {
    const { data: buyers = [], isLoading } = useQuery({
      queryKey: ["allbuyer"],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/allbuyer`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("tech-token")}`,
          },
        });
        const data = await res.json();
        return data;
      },
    });
    if(isLoading){
        return <Loader></Loader>
    }
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Buyer Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Remove Buyer</th>
              </tr>
            </thead>
            <tbody>
              {buyers.map((buyer, i) => (
                <tr key={i} className="hover">
                  <th>{i + 1}</th>
                  <td>{buyer.name}</td>
                  <td>{buyer.email}</td>
                  <td>{buyer.role}</td>
                  <td>
                    <Link>
                      <button className="btn btn-sm border-0 bg-gradient-to-r from-red-700 to-red-900">
                        Remove
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

export default AllBuyer;