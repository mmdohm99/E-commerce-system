import './Index.scss';
import { DataGrid } from '@mui/x-data-grid';
import { heroColumns } from '../../../dataTabelSrc';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Datatable = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetUsers = async () => {
      const result = await axios.get('http://localhost:3000/api/v1/hero');
      console.log(result);
      setData(
        result?.data?.data?.data &&
          result?.data?.data?.data.map((item, index) => {
            return {
              _id: item._id,
              id: index,
              title: item.title,
              image: item.image,
            };
          })
      );
    };
    GetUsers();
  }, []);

  const handleDelete = async (_id) => {
    await axios
      .delete(`http://localhost:3000/api/v1/hero/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
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
          <div className="cellAction">
            <Link
              to={`/dashboard/heroes/${params.row._id}/edit`}
              style={{ textDecoration: 'none' }}
            >
              <div className="editButton">Edit</div>
            </Link>
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
        Sliders
        <Link to="/dashboard/heroes/create" className="link">
          Add New Slider
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={heroColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
