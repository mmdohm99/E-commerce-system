import './Show.scss';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import Chart from '../../../components/chart/Chart';
import List from '../../../components/list/List';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Grid from '@mui/material/Grid';

const Single = () => {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetUsers = async () => {
      const result = await axios.get(
        `http://localhost:3000/api/v1/products/${productId}`
      );
      setData(() => result?.data?.data?.data);
    };
    GetUsers();
  }, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        {/* <Navbar /> */}
        <div className="top">
          <div className="left">
            <div className="editButton">Edite</div>
            <div className="title">Information</div>
            <div className="item">
              <img src={data?.photo} alt="butfile girle" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{data?.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Name :</span>
                  <span className="itemValue">{data?.name}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Category:</span>
                  <span className="itemValue">{data?.category?.name}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Sub Category:</span>
                  <span className="itemValue">{data?.subCategory?.name}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Seller:</span>
                  <span className="itemValue">{data?.seller?.name}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">{data?.listPrice}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">sku:</span>
                  <span className="itemValue">{data?.sku}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">{data?.description}</span>
                </div>
              </div>
            </div>
            {/* <div className="item">
              <img src={data?.photo} alt="butfile girle" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{data?.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Name :</span>
                  <span className="itemValue">{data?.name}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Category:</span>
                  <span className="itemValue">{data?.category?.name}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Sub Category:</span>
                  <span className="itemValue">{data?.subCategory?.name}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Seller:</span>
                  <span className="itemValue">{data?.seller}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">{data?.listPrice}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">sku:</span>
                  <span className="itemValue">{data?.sku}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">{data?.description}</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
