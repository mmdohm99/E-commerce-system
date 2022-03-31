import React from 'react';
import './List.scss';
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../navbar/Navbar';
import DataContact from '../dataContact/DataContact';

const ListContact = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <DataContact />
      </div>
    </div>
  );
};

export default ListContact;
