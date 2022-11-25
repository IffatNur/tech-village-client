import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../Pages/Dashboard/Sidebar/Sidebar';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="block lg:flex">
          <div class="flex-none w-80 h-52 lg:h-full mr-10 ...">
            <Sidebar></Sidebar>
          </div>
          <div class="grow h-14 ...">
            <Outlet></Outlet>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default DashboardLayout;