import './Index.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../../dataTabelSrc';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Datatable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetUsers = async () => {
      const result = await axios.get('http://localhost:3000/api/v1/users');
      setData(
        result?.data?.data?.data &&
          result?.data?.data?.data.map((item, index) => {
            return {
              id: index,
              photo: item.photo,
              phone: item.phone,
              name: item.name,
              email: item.email,
              city: item.address.city,
              country: item.address.country,
              role: item.role,
              street: item.address.street,
              zip: item.address.zip,
              status: item.isBanned,
              _id: item._id,
            };
          })
      );
    };
    GetUsers();
  }, []);
  const handleStatus = async (id, status) => {
    await axios
      .patch(`http://localhost:3000/api/v1/users/${id}`, {
        isBanned: !status,
      })
      .then((res) => {
        setData(data);
      });
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:3000/api/v1/users/${id}`)
      .then((res) => {
        setData(
          data.filter((item) => {
            return item._id !== id;
          })
        );
      });
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/dashboard/users/${params.row._id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleStatus(params.row._id, params.row.status)}
            >
              Ban
            </div>
            <div
              className="deleteButton"
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
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/dashboard/users/create" className="link">
          Add New User
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
