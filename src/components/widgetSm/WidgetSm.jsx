import React from "react";
import "./widgetsm.css";
import { Visibility } from "@material-ui/icons";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://picsum.photos/200/300"
            alt="person"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Kel</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButon">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://picsum.photos/200/300"
            alt="person"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Kel</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButon">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://picsum.photos/200/300"
            alt="person"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Kel</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButon">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://picsum.photos/200/300"
            alt="person"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Kel</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButon">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://picsum.photos/200/300"
            alt="person"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Kel</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButon">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
