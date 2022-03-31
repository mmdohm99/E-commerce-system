import { React, useState, useEffect } from 'react';
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import './Edit.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';

const New = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const REGISTER_URL = `http://localhost:3000/api/v1/products/${productId}`;
  const [file, setFile] = useState('');
  useEffect(() => {
    const hero = async () => {
      const result = await axios.get(
        `http://localhost:3000/api/v1/products/${productId}`
      );
      console.log(result);
      if (result?.data?.data?.data) {
        setFile(result.data.data.data.photo);
        setValue('name', result.data.data.data.name);
        setValue('description', result.data.data.data.description);
        setValue('salePrice', result.data.data.data.salePrice);
        setValue('listPrice', result.data.data.data.listPrice);
        setValue('sku', result.data.data.data.sku);
        setValue('stock', result.data.data.data.stock);
      }
      // setData(() => (result?.data?.data?.data && result?.data?.data?.data: {}));
    };
    hero();
  }, []);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();

    formData.append('name', data.name);
    // formData.append('colors', data.colors);
    // formData.append('sizes', data.sizes);
    // formData.append('brand', data.brand);
    formData.append('description', data.description);

    formData.append('salePrice', data.salePrice);
    formData.append('listPrice', data.listPrice);
    formData.append('sku', data.sku);
    formData.append('stock', data.stock);
    let response;
    try {
      response = await axios.patch(REGISTER_URL, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.log(err);
    }
    console.log(response?.data?.data?.data);
    navigate('/dashboard/products', { replace: true });
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        {/* <Navbar /> */}
        <div className="top">
          <h1>Edit Category</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? file
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formInput">
                <label>Name</label>
                <input {...register('name', { required: true })} />
                {errors.name && <span>name is required</span>}
              </div>
              <div className="formInput">
                <label>Description</label>
                <input
                  {...register('description', {
                    required: true,
                  })}
                />
                {errors.description && <span>Description is required</span>}
              </div>
              <div className="formInput">
                <label>listPrice</label>
                <input {...register('listPrice', { required: true })} />
                {errors.listPrice && <span>listPrice is required</span>}
              </div>
              <div className="formInput">
                <label>salePrice</label>
                <input {...register('salePrice')} />
                {errors.salePrice && <span>salePrice is required</span>}
              </div>
              <div className="formInput">
                <label>sku</label>
                <input {...register('sku', { required: true })} />
                {errors.sku && <span>sku is required</span>}
              </div>
              <div className="formInput">
                <label>stock</label>
                <input {...register('stock', { required: true })} />
                {errors.stock && <span>copyright is required</span>}
              </div>

              <div className="formInput">
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
