import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { ContactColumns } from '../../../dataTabelSrc';
import { Link } from 'react-router-dom';

const Datatable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetContact = async () => {
      const result = await axios.get('http://localhost:3000/api/v1/contactUs');
      console.log(result.data.data.data);
      setData(
        result?.data?.data?.data &&
          result?.data?.data?.data.map(
            ({ email, subject, message, _id }, index) => {
              return {
                _id,
                id: index,
                email,
                subject,
                message,
              };
            }
          )
      );
    };
    GetContact();
  }, []);

  const handleDelete = async (_id) => {
    await axios
      .delete(`http://localhost:3000/api/v1/contactUs/${_id}`, {
        headers: {
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDExOGJkZDM5ODg5MjBjODc0ZjUyMCIsImlhdCI6MTY0ODQ3NDcyMywiZXhwIjoxNjU2MjUwNzIzfQ.aavNeediEDxtYFF0gnX0WX9ymthnENqRNT0x8hnn2Zc'}`,
        },
      })
      .then((res) => {
        setData(
          data.filter((item) => {
            console.log(item);
            return item._id !== _id;
          })
        );
      });
    console.log(data);
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <div
              className='deleteButton'
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className='datatable'>
      <div className='datatableTitle'>Contact Us</div>
      <DataGrid
        className='datagrid'
        rows={data}
        columns={ContactColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[4]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
