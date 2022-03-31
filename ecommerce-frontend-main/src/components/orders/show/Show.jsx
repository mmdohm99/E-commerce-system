import './Show.scss';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import Chart from '../../../components/chart/Chart';
import List from '../../../components/list/List';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Single = () => {
  const { orderId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(orderId);
    const GetUsers = async () => {
      const result = await axios.get(
        `http://localhost:3000/api/v1/order/${orderId}`
      );
      console.log(result?.data?.data?.data);
      setData(result?.data?.data?.data);
    };
    GetUsers();
  }, [orderId]);
  console.log(data);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        {/* <Navbar /> */}
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <div className="title">Delivery Info</div>
            <div className="item">
              {/* <img src={data.photo} alt="butfile girle" className="itemImg" /> */}
              <div className="details">
                {/* <h1 className="itemTitle">{data.name}</h1> */}
                <div className="detailItem">
                  <span className="itemKey">User:</span>
                  <span className="itemValue">
                    {data?.user?.name || 'null'}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">
                    {data?.user?.phone || 'null'}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress:</span>
                  <span className="itemValue">
                    {data?.shippingAddress?.country} {''}
                    {data?.shippingAddress?.city} {''}
                    {data?.shippingAddress?.street} {''}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Zip Code:</span>
                  <span className="itemValue">
                    {data?.shippingAddress?.zip}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <div className="editButton">Edit</div>
            <div className="title">Extra Info</div>
            <div className="item">
              {/* <img src={data.photo} alt="butfile girle" className="itemImg" /> */}
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Total Price:</span>
                  <span className="itemValue">{data.totalPrice}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Payment Method:</span>
                  <span className="itemValue">{data.paymentMethod}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue">{data.status}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Discount:</span>
                  <span className="itemValue">False</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Order Items</h1>
          {data?.orderItems?.map((item) => (
            <Card sx={{ maxWidth: 245, backgroundColor: '#f3f3f3' }}>
              <CardMedia
                component="img"
                height="140"
                image={item?.product?.photo}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.Sigar}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item?.product?.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{item?.product?.ratingsAverage}/5</Button>
                <Button size="small"> {item.price}</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Single;
