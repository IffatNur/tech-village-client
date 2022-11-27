import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Sidebar = () => {
    const { user }= useContext(AuthContext);
    const [userRole, setUserrole] = useState('');
    fetch(`http://localhost:5000/user/${user?.email}`)
    .then(res => res.json())
    .then(data =>{
      setUserrole(data.isUser);
    });
      return (
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay "
            ></label>
            <ul className="menu p-4 w-80 bg-yellow-100 text-black font-semibold">
              {/* optional rendering  */}
              {userRole === "buyer" && (
                <li>
                  <Link to="/dashboard/myorders">My Orders</Link>
                </li>
              )}
              {userRole === "seller" && (
                <li>
                  <Link to="/dashboard/myproduct">My Products</Link>
                  <Link to="/dashboard/addproduct">Add New Products</Link>
                </li>
              )}
              {userRole === "admin" && (
                <li>
                  <Link to="/dashboard/allbuyer">All Buyer</Link>
                  <Link to="/dashboard/allseller">All Seller</Link>
                  <Link to="/dashboard/reports">Reported Items</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      );
};

export default Sidebar;