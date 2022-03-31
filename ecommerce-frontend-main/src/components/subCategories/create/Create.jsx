import { React, useState, useEffect } from 'react';
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import './Create.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
const REGISTER_URL = 'http://localhost:3000/api/v1/subCategory';

const New = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState('');
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem('token');
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      name: '',
      photo: '',
    },
  });
  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('photo', data.photo[0]);
    formData.append('name', data.name);
    formData.append('category', data.category);
    const response = await axios.post(REGISTER_URL, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    console.log(response?.data);
    navigate('/dashboard/subCategories', { replace: true });
  };
  useEffect(() => {
    const GetCategories = async () => {
      const result = await axios.get('http://localhost:3000/api/v1/category');
      console.log(result?.data?.data?.data);
      setCategories(() => result?.data?.data?.data);
    };
    GetCategories();
  }, []);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        {/* <Navbar /> */}
        <div className="top	">
          <h1>Add New Category</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                getValues('photo')
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ flexGrow: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <label htmlFor="file">
                      Iamge: <DriveFolderUploadOutlinedIcon />
                    </label>
                    <input
                      type="file"
                      {...register('photo', {
                        onChange: () => {
                          setFile(() => getValues('photo')[0]);
                        },
                        required: true,
                      })}
                      id="file"
                      style={{ display: 'none' }}
                    />
                    {errors.photo ? (
                      <p style={{ color: 'red' }}>Please Choose a photo</p>
                    ) : (
                      ''
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id="outlined-basic"
                      label="Outlined"
                      variant="standard"
                      error={errors.name ? true : false}
                      helperText={errors.name ? 'name is required' : ''}
                      {...register('name', { required: true })}
                    />{' '}
                  </Grid>

                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Category"
                        {...register('category', { required: true })}
                        error={errors.category ? true : false}
                      >
                        <MenuItem selected disabled>
                          Choose Category
                        </MenuItem>
                        {categories?.map((item) => (
                          <MenuItem key={item._id} value={item._id}>
                            {' '}
                            {item.name}{' '}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.category ? (
                        <p style={{ color: 'red' }}>'category is required'</p>
                      ) : (
                        ''
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="formInput">
                      <button>Send</button>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
