import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHubspot } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
  const {user} = useContext(AuthContext);
    const menuItem = (
      <React.Fragment>
        <li>
          <Link>{user?.displayName}</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link>Logout</Link>
        </li>
      </React.Fragment>
    );
    return (
      <div>
        <div className="navbar bg-yellow-600 flex justify-between relative top-0 text-white">
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
            <h1 className="btn btn-ghost normal-case text-2xl "><FaHubspot className='text-blue-800 mr-3 text-3xl font-bold'></FaHubspot><span className='text-blue-700 text-4xl font-bold'>T</span> ech <span className='text-blue-700 text-4xl font-bold'>V</span> illage</h1>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItem}</ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;