import React, { useContext } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

import ImageIcon from "@mui/icons-material/Image";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import EarbudsIcon from "@mui/icons-material/Earbuds";
const Sidebar = () => {
  const token = localStorage.getItem("token");
  let getRole;
  if (token) {
    getRole = JSON.parse(localStorage.getItem("response"));
  }
  const Role = getRole?.data?.data?.user?.role;
  console.log(Role);

  return (
    <>
      {Role === "seller" ? (
        <div className="sidebar">
          <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
              <span className="logo">Zmix</span>
            </Link>
            </div>
            <div className="center" ></div>
            <Link to="/dashboard/products" style={{ textDecoration: "none" , marginTop:'100px', marginLeft:'50px', fontSize:'20px'}}>
              
                <LocalShippingIcon className="icon" style={{marginRight: '15px'}} />
                <span>Products</span>
              
            </Link>
        </div>
      ) : (
        <div className="sidebar">
          <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="logo">Zmix</span>
            </Link>
          </div>

          <hr />
          <div className="center">
            <ul>
              <p className="title">MAIN</p>

              <Link to="/dashboard/products" style={{ textDecoration: "none" }}>
                <li>
                  <LocalShippingIcon className="icon" />
                  <span>Products</span>
                </li>
              </Link>

              {/**
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <li>
                  <DashboardIcon className="icon" />
                  <span>Dashboard</span>
                </li>
              </Link> */}

              <Link to="/dashboard/users" style={{ textDecoration: "none" }}>
                <li>
                  <PersonOutlineIcon className="icon" />
                  <span>Users</span>
                </li>
              </Link>

              <Link to="/dashboard/heroes" style={{ textDecoration: "none" }}>
                <li>
                  <ImageIcon className="icon" />
                  <span>Hero Slider</span>
                </li>
              </Link>
              <Link
                to="/dashboard/categories"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <FormatListBulletedIcon className="icon" />
                  <span>Categories</span>
                </li>
              </Link>
              <Link to='/dashboard/contact' style={{ textDecoration: 'none' }}>
            <li>
              <ConnectWithoutContactIcon className='icon' />
              <span>Contact</span>
            </li>
          </Link>
              <Link
                to="/dashboard/subCategories"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <FormatListBulletedIcon className="icon" />
                  <span>Sub Categories</span>
                </li>
              </Link>

              <Link to="/dashboard/orders" style={{ textDecoration: "none" }}>
                <li>
                  <CreditCardIcon className="icon" />
                  <span>Orders</span>
                </li>
              </Link>
              <Link to="/dashboard/variants" style={{ textDecoration: "none" }}>
                <li>
                  <EarbudsIcon className="icon" />
                  <span>Variants</span>
                </li>
              </Link>
              <Link
                to="/dashboard/variantOptions"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <EarbudsIcon className="icon" />
                  <span>VariantOptions</span>
                </li>
              </Link>

              <p className="title">Control</p>

              <Link to="/dashboard/Settings" style={{ textDecoration: "none" }}>
            <li>
              <EarbudsIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
