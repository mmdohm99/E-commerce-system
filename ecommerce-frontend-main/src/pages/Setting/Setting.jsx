import React from "react";
import "./Setting.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/settings/index/Index";

const Settings = () => {
  return (
    <div className="settings">
      <Sidebar />
      <div className="settingsContainer">
        <Datatable />
      </div>
    </div>
  );
};

export default Settings;
