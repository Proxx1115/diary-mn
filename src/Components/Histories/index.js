import React from "react";
import History from "../History";
import css from "./style.module.css";
const Histories = (props) => {
  return (
    <div className={css.Histories}>
      {props.data.map((el) => (
        <History hist={el[1]} />
      ))}
    </div>
  );
};
export default Histories;
