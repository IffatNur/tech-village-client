import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../component/Loader';

const AllSeller = () => {
    const { data: sellers = [], isLoading } = useQuery({
      queryKey: ["allseller"],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/allseller`);
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
                <th>Seller Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Remove Seller</th>
                <th>Verify Seller</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, i) => (
                <tr key={i} className="hover">
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>{seller.role}</td>
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

export default AllSeller;