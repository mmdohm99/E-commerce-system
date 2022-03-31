import { React, useState } from 'react';
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
const REGISTER_URL = 'http://localhost:3000/api/v1/hero';

const New = ({ title, input }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState('');
  const token = localStorage.getItem('token');
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      title: '',
      image: '',
    },
  });
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);
    formData.append('title', data.title);
    const response = await axios.post(REGISTER_URL, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    console.log(response?.data);
    navigate('/dashboard/heroes', { replace: true });
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        {/* <Navbar /> */}
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                getValues('image')
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
                      {...register('image', {
                        onChange: () => {
                          setFile(() => getValues('image')[0]);
                        },
                      })}
                      id="file"
                      style={{ display: 'none' }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id="outlined-basic"
                      label="Outlined"
                      variant="standard"
                      error={errors.title ? true : false}
                      helperText={errors.title ? 'title is required' : ''}
                      {...register('title', { required: true })}
                    />{' '}
                  </Grid>

                  <Grid item xs={12}>
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
