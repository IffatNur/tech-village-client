import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHubspot, FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const logOut = ()=>{
    logout()
    .then(()=>{
      navigate('/');
    })
    .then(error=>console.log(error))
  }
      const menuItem = (
        <React.Fragment>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={logOut}>Logout</button>
              </li>
              <li>
                <Link>
                  <FaUserAlt></FaUserAlt>
                  {user?.displayName}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </React.Fragment>
      );
    return (
      <div>
        <div className="navbar bg-yellow-600 flex justify-between relative top-0 lg:text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
              >
                {menuItem}
              </ul>
            </div>
            <h1 className="btn btn-ghost normal-case text-2xl ">
              <FaHubspot className="text-blue-800 mr-3 text-3xl font-bold"></FaHubspot>
              <span className="text-blue-700 text-4xl font-bold">T</span> ech{" "}
              <span className="text-blue-700 text-4xl font-bold">V</span> illage
            </h1>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItem}</ul>
          </div>
          <label
            htmlFor="dashboard-drawer"
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    );
};

export default Navbar;