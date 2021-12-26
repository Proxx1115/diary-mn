import React from "react";
import css from "./style.module.css";
import { connect } from "react-redux";
import axios from "../../axios-checkUser";
import MoreHistory from "../MoreHistory";
import img from "../../assets/gray.png";
class MoreHist extends React.Component {
  state = {
    selected: [],
  };
  componentDidMount() {
    axios
      .get(`histories.json?orderBy="postID"&equalTo="${this.props.postID}"`)
      .then((response) => {
        this.setState({ selected: Object.entries(response.data) });
      });
  }

  render() {
    return (
      <div className={css.MoreHist}>
        <img src={img} />
        {this.state.selected[0] !== undefined && (
          <MoreHistory data={this.state.selected[0][1]} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postID: state.postID,
  };
};
export default connect(mapStateToProps)(MoreHist);
