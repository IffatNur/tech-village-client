import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Sidebar = () => {
    const { user }= useContext(AuthContext);
    return (
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
          <ul className="menu p-4 w-80 bg-yellow-100 text-black font-semibold">
            {/* optional rendering  */}
            <li>
                <Link to="/dashboard">My Bookings</Link>
            </li>
            <li>
              <Link to="/dashboard">My Products</Link>
              <Link to="/dashboard/addproduct">Add New Products</Link>
            </li>
            <li>
              <Link to="/dashboard/allusers">All Buyer</Link>
              <Link to="/dashboard/adddoctor">All Seller</Link>
              <Link to="/dashboard/managedoctors">Reported Items</Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Sidebar;