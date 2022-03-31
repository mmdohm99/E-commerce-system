import { React, useState, useEffect } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
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
  const REGISTER_URL = `http://localhost:3000/api/v1/category/${categoryId}`;

  const [file, setFile] = useState('');
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
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
    const response = await axios.patch(REGISTER_URL, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    console.log(response?.data);
    navigate('/dashboard/categories', { replace: true });
  };
  useEffect(() => {
    const hero = async () => {
      const result = await axios.get(
        `http://localhost:3000/api/v1/category/${categoryId}`
      );
      console.log(result);
      if (result?.data?.data?.data) {
        setFile(result.data.data.data.photo);
        setValue('name', result.data.data.data.name);
      }
      // setData(() => (result?.data?.data?.data && result?.data?.data?.data: {}));
    };
    hero();
  }, []);
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
                          setFile(() =>
                            URL.createObjectURL(getValues('photo')[0])
                          );
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
                      error={errors.name ? true : false}
                      helperText={errors.name ? 'name is required' : ''}
                      {...register('name', { required: true })}
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
