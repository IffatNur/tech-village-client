import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FaChevronCircleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loader from '../../../component/Loader';
import useTitle from '../../../Title/Title';

const AllSeller = () => {
  useTitle("All seller");
    const {
      data: sellers = [],
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["allseller"],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/allseller`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("tech-token")}`,
          },
        });
        const data = await res.json();
        return data;
      },
    });
    if (isLoading) {
      return <Loader></Loader>;
    }
    const handleRemove = (id) => {
      fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("tech-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
            toast.success("Removed Successfully");
          }
        });
    };

    const handleVerify = (id) =>{
      console.log(id);
      fetch(`http://localhost:5000/users/${id}`,{
        method:'PUT',
        headers:{
          authorization: `Bearer ${localStorage.getItem("tech-token")}`
        }
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        refetch();
        toast.success('Seller Verified.')
      });
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
                  <td className="flex items-center">
                    {seller.name}
                    {seller.isVerified && (
                      <FaChevronCircleDown className="ml-1 text-blue-700"></FaChevronCircleDown>
                    )}
                  </td>
                  <td>{seller.email}</td>
                  <td>{seller.role}</td>
                  <td>
                    <Link>
                      <button
                        onClick={() => handleRemove(seller._id)}
                        className="btn btn-sm border-0 bg-gradient-to-r from-red-700 to-red-900"
                      >
                        Remove
                      </button>
                    </Link>
                  </td>
                  {seller.isVerified && (
                    <td>
                      <Link>
                        <button
                          onClick={() => handleVerify(seller._id)}
                          className="btn btn-sm border-0 bg-gradient-to-r from-green-600 to-green-900"
                        >
                          Verified
                        </button>
                      </Link>
                    </td>
                  )}
                  {!seller.isVerified && (
                    <td>
                      <Link>
                        <button
                          onClick={() => handleVerify(seller._id)}
                          className="btn btn-sm border-0 bg-gradient-to-r from-blue-700 to-blue-900"
                        >
                          Unverified
                        </button>
                      </Link>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllSeller;