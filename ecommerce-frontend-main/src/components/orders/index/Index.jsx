import './Index.scss';
import { DataGrid } from '@mui/x-data-grid';
import { orderColumns } from '../../../dataTabelSrc';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Datatable = () => {
  const token = localStorage.getItem('token');

  const [open, setOpen] = React.useState(false);
  const [orderId, setOrderId] = React.useState(0);
  const handleOpen = (id) => {
    setOpen(true);
    console.log(id);
    setOrderId(() => id);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = async (orderStatus) => {
    console.log('order status', orderStatus);
    console.log('order id', orderId);
    // const formData = new FormData();
    const response = await axios.patch(
      `http://localhost:3000/api/v1/order/${orderId}`,
      orderStatus,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    handleClose();
    // console.log(response);
    // console.log(response?.data);
    // navigate('/dashboard/subCategories', { replace: true });
  };
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      status: 'pending',
    },
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetUsers = async () => {
      const result = await axios.get('http://localhost:3000/api/v1/order');
      console.log(result?.data?.data?.data);
      setData(
        result?.data?.data?.data &&
          result?.data?.data?.data.map((item, index) => {
            return {
              id: index,
              _id: item._id,
              user: item.user?.name || 'null',
              country: item.phone,
              street: item.shippingAddress?.street || 'null',
              city: item.shippingAddress?.city,
              country: item.shippingAddress?.country,
              totalPrice: item.totalPrice,
              createdAt: item?.createdAt,
            };
          })
      );
    };
    GetUsers();
  }, []);

  // const handleDelete = async (id) => {
  //   await axios.delete(`http://localhost:3000/api/v1/users/${id}`).then(() => {
  //     setData(data.filter((item) => item.id !== id));
  //   });
  // };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/dashboard/orders/${params.row._id}/show`}
              style={{ textDecoration: 'none' }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              onClick={() => handleOpen(params.row._id)}
              className="deleteButton"
            >
              Edit
            </div>
            {/* <Link
              to={`/dashboard/orders/${params.row._id}/edit`}
              style={{ textDecoration: 'none' }}
            >
              <div  className="deleteButton">
                Edit
              </div>
            </Link> */}
            {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div> */}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400, padding: '50px' }}>
          <h3 id="child-modal-title">Change Status</h3>
          {/* <p id="child-modal-description" style={{ margin: '14px' }}> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl style={{ margin: '10px' }} fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Category"
                {...register('status', { required: true })}
                error={errors.status ? true : false}
              >
                <MenuItem value="pending" selected>
                  Pending
                </MenuItem>
                <MenuItem value="on_the_way">On the way</MenuItem>
                <MenuItem value="delivered">Delivered</MenuItem>
                <MenuItem value="canceled">Canceled</MenuItem>
                <MenuItem value="retrieved">Retrieved</MenuItem>
              </Select>
              {errors.category ? (
                <p style={{ color: 'red' }}>'category is required'</p>
              ) : (
                ''
              )}
            </FormControl>
            <Button type="submit" variant="contained" color="success">
              Send
            </Button>
            <Button onClick={handleClose} variant="outlined" color="error">
              Close
            </Button>
          </form>
          {/* </p> */}
        </Box>
      </Modal>
      {/* <div className="datatableTitle">
        Orders
        <Link to="/orders/create" className="link">
          Add New Ordersbnvcbcvb
        </Link>
      </div> */}
      <DataGrid
        className="datagrid"
        rows={data}
        columns={orderColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
