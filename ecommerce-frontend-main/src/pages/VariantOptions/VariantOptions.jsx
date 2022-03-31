import React from 'react';
import './VariantOptions.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/variantOptions/index/Index';

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
