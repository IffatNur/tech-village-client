import React from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const handleLogin = (data) => {
      console.log(data);
    };
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
                  type="text"
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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning text-blue-300">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Signup;