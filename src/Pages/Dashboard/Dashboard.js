import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
      <div>
        <div className="card w-96 bg-yellow-100 shadow-xl mx-auto lg:mt-20">
          <div className="card-body">
            <h2 className="card-title">Welcome, {user?.displayName}</h2>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;