import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../component/Loader';
import { AuthContext } from '../../../context/AuthProvider';

const MyProduct = () => {
    const {user} = useContext(AuthContext);
    const {data: products = [], isLoading} = useQuery({
        queryKey: ['product', user?.email],
        queryFn: async()=>{
            const res = await fetch(
              `http://localhost:5000/product?email=${user?.email}`
            );
            const data = await res.json()
            return data;
        }
    })
    
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
                <th>Product Name</th>
                <th>Status</th>
                <th>Price</th>
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
                  <td>
                    <button className="btn btn-sm">Status</button>
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      {product.original_price}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyProduct;