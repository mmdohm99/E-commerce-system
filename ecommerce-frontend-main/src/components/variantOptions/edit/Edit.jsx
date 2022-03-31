import { React, useEffect, useState } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import './Edit.scss';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const token = localStorage.getItem('token');
const New = ({ title, input }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { variantOptionId } = useParams();

  useEffect(() => {
    const getSingleVariant = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/v1/variantOption/${variantOptionId}`,
        data
      );
      if (response?.data?.data?.data) {
        setValue('name', response?.data?.data?.data.name);
      }
    };
    getSingleVariant();
  }, [data, setValue, variantOptionId]);

  const onSubmit = async (data) => {
    await axios.patch(
      `http://localhost:3000/api/v1/variantOption/${variantOptionId}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    navigate('/dashboard/variantOptions', { replace: true });
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
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formInput">
                <label>Variant Name</label>
                <input {...register('name', { required: true })} />
                {errors.name && <span>VariantOption Name is required</span>}
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
