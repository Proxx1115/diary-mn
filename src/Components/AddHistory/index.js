import React from "react";
import css from "./style.module.css";

const addHistory = (props) => {
  return (
    <form className={css.Form}>
      <input onChange={props.changeDate} type="date" />
      <input onChange={props.changeTitle} type="text" placeholder="Гарчиг" />
      <textarea
        onChange={props.changeContent}
        type="text"
        placeholder="Бичих.."
      />
      <p className={css.text}>{props.text}</p>
      <div className={css.saveBtn}>
        <div className={css.btn} onClick={props.saveHistory}>
          Хадгалах
        </div>
      </div>
    </form>
  );
};
export default addHistory;
