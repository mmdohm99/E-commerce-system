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

const New = ({ title, input }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { heroId } = useParams();
  const REGISTER_URL = `http://localhost:3000/api/v1/hero/${heroId}`;

  const [file, setFile] = useState('');
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      image: '',
    },
  });
  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('image', data.image[0]);
    formData.append('title', data.title);
    const response = await axios.patch(REGISTER_URL, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    console.log(response?.data);
    navigate('/dashboard/heroes', { replace: true });
  };
  useEffect(() => {
    const hero = async () => {
      const result = await axios.get(
        `http://localhost:3000/api/v1/hero/${heroId}`
      );
      console.log(result);
      if (result?.data?.data?.data) {
        setFile(result.data.data.data.image);
        setValue('title', result.data.data.data.title);
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
          <h1>{title}</h1>
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
                      {...register('image', {
                        onChange: () => {
                          setFile(() =>
                            URL.createObjectURL(getValues('image')[0])
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
