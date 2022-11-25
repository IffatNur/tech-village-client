import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../../context/AuthProvider';
import './AddProduct.css';

const AddProduct = () => {
  const current = new Date();
  const {user} = useContext(AuthContext);
  const {register,handleSubmit,formState: { errors },} = useForm();
  const navigate = useNavigate();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const handleSubmission = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const secret = process.env.REACT_APP_imgbb_api;
    fetch(`https://api.imgbb.com/1/upload?key=${secret}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data.display_url);
        const productInfo = {
          img: result.data.display_url,
          seller_name: user.displayName,
          email: user.email,
          category_title: data.category_title,
          title: data.title,
          resale_price: data.resale_price,
          original_price: data.original_price,
          location: data.location,
          used: data.used,
          description: data.description,
          condition: data.condition,
          phone: data.phone,
          posted: date,
        };
        console.log(productInfo);
        fetch(`http://localhost:5000/product`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("tech-token")}`,
          },
          body: JSON.stringify(productInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              navigate("/dashboard/myproduct");
              toast.success("Product added successfully!");
            }
          });
      });
  };
    return (
      <form
        onSubmit={handleSubmit(handleSubmission)}
        className="add-product w-4/5 mx-auto text-center"
      >
        <h2 className="text-xl font-bold">
          Please fillup the form to add a product
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-5 text-center">
          <input
            type="text"
            {...register("phone", { required: true })}
            placeholder="Seller Contact"
            className="input input-bordered input-md w-full max-w-xs mx-auto"
          />

          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Product Name"
            className="input input-bordered input-md w-full max-w-xs mx-auto"
          />
          <select
            {...register("category_title", { required: true })}
            className="select select-bordered w-full "
          >
            <option value="Apple">Apple</option>
            <option value="Dell">Dell</option>
            <option value="HP">HP</option>
          </select>
          <select
            {...register("condition", { required: true })}
            className="select select-bordered w-full "
          >
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
          <input
            type="text"
            {...register("original_price", { required: true })}
            placeholder="Original Price"
            className="input input-bordered input-md w-full max-w-xs mx-auto"
          />
          <input
            type="text"
            {...register("resale_price", { required: true })}
            placeholder="Resale Price"
            className="input input-bordered input-md w-full max-w-xs mx-auto"
          />

          <input
            type="text"
            {...register("used", { required: true })}
            placeholder="Used Duration"
            className="input input-bordered input-md w-full max-w-xs mx-auto"
          />
          <input
            type="text"
            {...register("location", { required: true })}
            placeholder="Seller Location"
            className="input input-bordered input-md w-full max-w-xs mx-auto"
          />
        </div>
        <input
          type="file"
          {...register("image", { required: true })}
          className="input input-bordered w-4/5 border-2 p-5 mb-3"
        />
        <input
          type="text"
          {...register("description", { required: true })}
          placeholder="Product Feature"
          className="input input-bordered w-4/5 "
        />
        <input type="submit" className="btn mt-4 w-4/5" />
      </form>
    );
};

export default AddProduct;