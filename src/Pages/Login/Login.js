import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import useTitle from "../../Title/Title";
import { Link } from "react-router-dom";

const Login = () => {
  useTitle("Login");
  const { signin, googleSignin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    signin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userEmail = { email: user?.email };
        fetch("https://tech-village-server-iffatnur.vercel.app/jwt", {
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
        navigate(from, { replace: true });
        toast.success("Login Successful!");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  const handleGoogle = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userEmail = { email: user?.email };
        fetch("https://tech-village-server-iffatnur.vercel.app/jwt", {
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
        navigate("/");
        toast.success("Login Successful!");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
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
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <small role="alert" className="text-error">
                  {errors.email?.message}
                </small>
              )}
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
              {errors.password && (
                <small role="alert" className="text-error">
                  {errors.password?.message}
                </small>
              )}
            </div>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-yellow-600 font-semibold">
                Sign Up
              </Link>
            </p>
            <div className="form-control mt-4">
              <button className="btn border-0 bg-yellow-600">Login</button>
              <button
                onClick={handleGoogle}
                className="btn btn-outline btn-wide flex text-center items-center mt-3"
              >
                <FaGoogle className="mr-3"></FaGoogle> Google Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
