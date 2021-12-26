import React from "react";
import css from "./style.module.css";
import * as action from "../../redux/actions/getIDactions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getPostid = () => {
    this.props.GETpostID(this.props.hist.postID);
    this.props.history.push("/more");
  };
  render() {
    return (
      <div className={css.history}>
        <div className={css.date}>{this.props.hist.date}</div>
        <div className={css.title}>{this.props.hist.title.toUpperCase()}</div>
        <div className={css.content}>{this.props.hist.content}</div>
        <div onClick={() => this.getPostid()} className={css.Readbtn}>
          Илүүг унших
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    GETpostID: (postid) => dispatch(action.postID(postid)),
  };
};
export default connect(null, mapDispatchToProps)(withRouter(History));
