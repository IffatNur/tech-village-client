import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Loader from '../../../component/Loader';
import useTitle from '../../../Title/Title';

const AllBuyer = () => {
  useTitle("All Buyer");
    const { data: buyers = [], refetch, isLoading } = useQuery({
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

    const handleRemove = (id) =>{
      fetch(`http://localhost:5000/user/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem("tech-token")}`,
        },
      })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0){ 
          refetch();
          toast.success("Removed Successfully");
        };
      });
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
                <th>Verify Buyer</th>
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
                      <button
                        onClick={()=>handleRemove(buyer._id)}
                        className="btn btn-sm border-0 bg-gradient-to-r from-red-700 to-red-900"
                      >
                        Remove
                      </button>
                    </Link>
                  </td>
                  <td>
                    <Link>
                      <button
                        className="btn btn-sm border-0 bg-gradient-to-r from-yellow-500 to-orange-600"
                      >
                        Verify
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