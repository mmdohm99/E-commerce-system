import { React, useState, useEffect } from "react";
import "./Index.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const token = localStorage.getItem("token");

const Settings = ({ title, input }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const getSingleVariant = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/settings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response?.data?.data?.data[0]);
      if (response?.data?.data?.data) {
        setValue("title", response?.data?.data?.data[0].title);
        setValue("description", response?.data?.data?.data[0].description);
        setValue("phone", response?.data?.data?.data[0].phone);
        setValue("email", response?.data?.data?.data[0].email);
        setValue("logo", response?.data?.data?.data[0].logo);
        setValue("copyright", response?.data?.data?.data[0].copyright);
        setValue("facebook", response?.data?.data?.data[0].facebook);
        setValue("instagram", response?.data?.data?.data[0].instagram);
        setValue("pinterest", response?.data?.data?.data[0].pinterest);
        setValue("youtube", response?.data?.data?.data[0].youtube);
        setValue("currency", response?.data?.data?.data[0].currency);
        setValue(
          "currencySymbol",
          response?.data?.data?.data[0].currencySymbol
        );
      }
    };
    getSingleVariant();
  }, [data, setValue]);

  const onSubmit = async (data) => {
    await axios.patch(
      "http://localhost:3000/api/v1/settings/62428ec79ec09b7688808241",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Website Settings</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formInput">
                <label>Title</label>
                <input {...register("title", { required: true })} />
                {errors.title && <span>title is required</span>}
              </div>
              <div className="formInput">
                <label>Description</label>
                <input
                  {...register("description", {
                    required: true,
                  })}
                />
                {errors.description && <span>Description is required</span>}
              </div>
              <div className="formInput">
                <label>email</label>
                <input {...register("email", { required: true })} />
                {errors.email && <span>email is required</span>}
              </div>
              <div className="formInput">
                <label>phone</label>
                <input {...register("phone", { required: true })} />
                {errors.phone && <span>phone is required</span>}
              </div>
              <div className="formInput">
                <label>logo</label>
                <input {...register("logo", { required: true })} />
                {errors.logo && <span>logo is required</span>}
              </div>
              <div className="formInput">
                <label>copyright</label>
                <input {...register("copyright", { required: true })} />
                {errors.copyright && <span>copyright is required</span>}
              </div>
              <div className="formInput">
                <label>facebook</label>
                <input {...register("facebook", { required: true })} />
                {errors.facebook && <span>facebook is required</span>}
              </div>
              <div className="formInput">
                <label>instagram</label>
                <input {...register("instagram", { required: true })} />
                {errors.instagram && <span>instagram is required</span>}
              </div>
              <div className="formInput">
                <label>pinterest</label>
                <input {...register("pinterest", { required: true })} />
                {errors.pinterest && <span>pinterest is required</span>}
              </div>
              <div className="formInput">
                <label>youtube</label>
                <input {...register("youtube", { required: true })} />
                {errors.youtube && <span>youtube is required</span>}
              </div>
              <div className="formInput">
                <label>currency</label>
                <input {...register("currency", { required: true })} />
                {errors.currency && <span>currency is required</span>}
              </div>
              <div className="formInput">
                <label>currencySymbol</label>
                <input {...register("currencySymbol", { required: true })} />
                {errors.currencySymbol && (
                  <span>currencySymbol is required</span>
                )}
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

export default Settings;
