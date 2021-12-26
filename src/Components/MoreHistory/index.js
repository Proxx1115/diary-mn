import React from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";
const MoreHistory = (props) => {
  console.log(props.data);
  return (
    <div className={css.container}>
      <Link to="/mainpage">
        <i class="fas fa-arrow-left"></i>
      </Link>
      <div className={css.MoreHistory}>
        <div className={css.date}>{props.data.date}</div>
        <div className={css.title}>{props.data.title}</div>
        <div className={css.content}>{props.data.content}</div>
      </div>
    </div>
  );
};
export default MoreHistory;
