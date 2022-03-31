import './Index.scss';
import { DataGrid } from '@mui/x-data-grid';
import { variantColumns } from '../../../dataTabelSrc';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const token = localStorage.getItem('token');
const Datatable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetUsers = async () => {
      const result = await axios.get(
        'http://localhost:3000/api/v1/variantOption'
      );
      setData(
        result?.data?.data?.data &&
          result?.data?.data?.data.map((item, index) => {
            console.log(item);
            return {
              id: index,
              name: item.name,
              _id: item._id,
              variantName: item.variant?.name,
              variantId: item.variant?._id,
            };
          })
      );
    };
    GetUsers();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:3000/api/v1/variantOption/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
            <div className="deleteButton">
              <Link
                style={{ textDecoration: 'none' }}
                to={`/dashboard/variantOptions/variant/${params.row.variantId}/${params.row._id}/edit`}
              >
                Edit
              </Link>
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
        Variants
        <Link to="/dashboard/variantOptions/create" className="link">
          Add New VariantOption
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={variantColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
