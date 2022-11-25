import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../Title/Title';

const Signup = () => {
  useTitle("Signup");
  const [loginRole, setLoginrole] = useState('');
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate=  useNavigate();
    const {register,handleSubmit,formState: { errors }} = useForm();
    const handleLogin = (data) => {
      createUser(data.email, data.password)
      .then(result =>{
        const user = result.user;
        if (data.name && data.email && loginRole) {
          updateUser(data.name)
          .then(()=>{
              registered(data.name, data.email, loginRole);
              navigate("/");
              toast.success(`Registered as ${loginRole}!`);
          })
          .catch(err=>{
            toast.error(err.message);
          })
        }
        else{
          toast.error('Please fillup all the field');
        }
      })
      .catch(error=> {
        toast.error(error.message);
      })
    };
    const handleRadio = (role) =>{
      setLoginrole(role);
    }

    const registered = (name, email, role) =>{
      const userInfo = {name,email,role};
      fetch(`http://localhost:5000/users`,{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const userEmail = {email}

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userEmail),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("tech-token", data.token);
          });
      });
    }
    return (
      <div className="hero min-h-screen bg-yellow-100">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && <small>{errors.email?.message}</small>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && <small>{errors.password?.message}</small>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sign up as</span>
                </label>
                <div className='flex justify-around'>
                  <div className="flex items-center my-2">
                    <input
                      type="radio"
                      name="role"
                      className="radio radio-primary mr-2"
                      onClick={()=>handleRadio('seller')} required
                    />
                    <small>Seller</small>
                  </div>
                  <div className="flex items-center my-2">
                    <input
                      type="radio"
                      name="role"
                      className="radio radio-primary mr-2"
                      onClick={()=>handleRadio('buyer')} required
                    />
                    <small>Buyer</small>
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn border-0 bg-yellow-600">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Signup;