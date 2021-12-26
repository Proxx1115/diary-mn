import React from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";
const SideBar = (props) => {
  const style = {
    background: props.color,
  };
  let csss = [css.SideBar, css.false];
  if (props.state) {
    csss = [css.SideBar, css.true];
  }
  return (
    <div style={style} className={csss.join(" ")}>
      <ul>
        <Link to="/reg">
          <li>REGISTER</li>
        </Link>
      </ul>
    </div>
  );
};
export default SideBar;
