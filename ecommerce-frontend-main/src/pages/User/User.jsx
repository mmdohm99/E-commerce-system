import React from 'react';
import './User.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/users/index/Index';

const User = () => {
  return (
    <div className="user">
      <Sidebar />
      <div className="userContainer">
        {/* <Navbar /> */}
        <Datatable />
      </div>
    </div>
  );
};

export default User;
