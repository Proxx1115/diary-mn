import React from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";
const SideBar1 = (props) => {
  const style = {
    background: props.color,
  };
  return (
    <div style={style} className={`${css.SideBar}`}>
      <ul>
        <Link to="/">
          <li>LOGIN</li>
        </Link>
      </ul>
    </div>
  );
};
export default SideBar1;
