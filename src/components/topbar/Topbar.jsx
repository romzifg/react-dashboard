import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topleft">
          <span className="logo">DashboardAdmin</span>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://picsum.photos/200/300"
            alt="avatar"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
