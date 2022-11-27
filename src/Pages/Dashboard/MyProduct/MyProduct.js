import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Loader from '../../../component/Loader';
import { AuthContext } from '../../../context/AuthProvider';
import useTitle from '../../../Title/Title';

const MyProduct = () => {
  useTitle("Myproducts");
  const [isAvailable, setIsavailable] = useState(true);
    const {user} = useContext(AuthContext);
    const {data: products = [], isLoading, refetch} = useQuery({
        queryKey: ['product', user?.email],
        queryFn: async()=>{
            const res = await fetch(
              `http://localhost:5000/product?email=${user?.email}`,
              {
                headers: {
                  authorization: `Bearer ${localStorage.getItem("tech-token")}`,
                },
              }
            );
            const data = await res.json()
            return data;
        }
    })
    
    if(isLoading){
        return <Loader></Loader>
    }

    const handleAvailable = (id) =>{
      fetch(`http://localhost:5000/product/${id}`, {
        method:'PUT',
        headers: {
          authorization: `Bearer ${localStorage.getItem("tech-token")}`,
        },
      })
      .then(res =>res.json())
      .then(data => {
        console.log(data);
        refetch();
      });
    }
    const handleAdvertise = (id) =>{
      fetch(`http://localhost:5000/productad/${id}`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("tech-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
          toast.success('Product Advertised! (Check On Homepage)')
        });
    }

    const handleDeleteitem = (id) =>{
      console.log(id);
      fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("tech-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
            toast.error("Deleted Product Successfully");
          }
        });
    }
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Delete</th>
                <th>Status</th>
                <th>Advertise</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={i}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {product.title}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Brand: {product.category_title}
                    </span>
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      {product.original_price}
                    </button>
                  </th>
                  <td>
                    <button
                      onClick={() => handleDeleteitem(product._id)}
                      className="btn btn-sm border-0 bg-gradient-to-r from-red-700 to-red-900"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    {!product.status && (
                      <button
                        onClick={() => handleAvailable(product._id)}
                        className="btn btn-sm"
                      >
                        In Stock
                      </button>
                    )}
                    {product.status && (
                      <button className="btn btn-sm " disabled>
                        Sold
                      </button>
                    )}
                  </td>
                  <td>
                    {!product.status && (
                      <button
                        onClick={() => handleAdvertise(product._id)}
                        className="btn btn-sm btn-primary" disabled={product.advertise}
                      >
                        Advertise
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyProduct;