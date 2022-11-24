import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthProvider';
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    const {signin,googleSignin} = useContext(AuthContext);
    const navigate = useNavigate();
     const {register, handleSubmit, formState: { errors }} = useForm();
     const handleLogin = (data) => {
        console.log(data);
        signin(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .catch(error=> console.log(error))
    };
    const handleGoogle = () =>{
        googleSignin()
        .then(result=>{
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .catch(err=>console.log(err));
    }
    return (
      <div className="hero min-h-screen bg-yellow-100">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
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
                <label className="label">
                  <button onClick={handleGoogle}>
                    <FaGoogle></FaGoogle> Google Signin
                  </button>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn border-0 bg-yellow-600">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;