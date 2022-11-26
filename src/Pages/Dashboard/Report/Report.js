import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../component/Loader';
import useTitle from '../../../Title/Title';

const Report = () => {
    useTitle('Report Items')
    const {data: reports =[], isLoading,refetch} = useQuery({
        queryKey: ['report'],
        queryFn: async() =>{
            const res = await fetch("http://localhost:5000/report",{
                headers: {
                    authorization: `Bearer ${localStorage.getItem('tech-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loader></Loader>
    }

    const handleRemove = (id,reportId) =>{
        console.log(id, reportId);
        fetch(`http://localhost:5000/product/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("tech-token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {});
        fetch(`http://localhost:5000/report/${reportId}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("tech-token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              toast.success("Deleted Product Successfully");
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
                <th>Image</th>
                <th>Product Name</th>
                <th>Seller Name</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, i) => (
                <tr key={i} className="hover">
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={report?.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {report.title}{" "}
                    <p className="text-sm opacity-50">{report.resale_price}</p>
                  </td>
                  <td>
                    <div className="text-sm opacity-50">
                      {report.seller_name}
                    </div>
                  </td>

                  <td>
                    <button
                      onClick={() => handleRemove(report.product_id, report._id)}
                      className="btn btn-sm border-0 bg-gradient-to-r from-blue-700 to-gray-500"
                    >
                      Remove Item
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Report;