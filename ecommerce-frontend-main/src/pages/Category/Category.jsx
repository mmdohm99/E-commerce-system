import React from 'react';
import './Category.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/categories/index/Index';

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        {/* <Navbar /> */}
        <Datatable />
      </div>
    </div>
  );
};

export default List;
