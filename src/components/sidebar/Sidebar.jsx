import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  QuestionAnswer,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarlist">
            <li className="sidebarListItem active">
              <LineStyle className="sidebariIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebariIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebariIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarlist">
            <li className="sidebarListItem">
              <PermIdentity className="sidebariIcon" />
              Users
            </li>
            <li className="sidebarListItem">
              <Storefront className="sidebariIcon" />
              Product
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebariIcon" />
              Transaction
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebariIcon" />
              Report
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarlist">
            <li className="sidebarListItem">
              <MailOutline className="sidebariIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <QuestionAnswer className="sidebariIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebariIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarlist">
            <li className="sidebarListItem">
              <WorkOutline className="sidebariIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebariIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebariIcon" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
