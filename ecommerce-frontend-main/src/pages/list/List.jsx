import React from 'react';
import './List.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
// import DataTabel from '../../components/dataTable/DataTabel';

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        {/* <Navbar /> */}
        {/* <DataTabel /> */}
      </div>
    </div>
  );
};

export default List;
