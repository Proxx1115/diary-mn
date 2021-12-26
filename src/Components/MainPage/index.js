import React from "react";
import uniqid from "uniqid";
import css from "./style.module.css";
import { Link, Route } from "react-router-dom";
import AddHistory from "../AddHistory";
import { connect } from "react-redux";
import axios from "../../axios-checkUser";
import Histories from "../Histories";
import img from "../../assets/gray.png";
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      date: "",
      histories: [],
      text: "",
      success: "",
      open: true,
      postID: "",
    };
  }
  changeTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  changeDate = (e) => {
    this.setState({ date: e.target.value });
  };
  getPostID = () => {};
  saveHistory = () => {
    const newHistory = {
      date: this.state.date,
      title: this.state.title,
      content: this.state.content,
      postID: uniqid(),
      userID: this.props.id,
    };
    if (!newHistory.userID) {
      this.props.history.replace("/");
    }
    if (newHistory.title === "") {
      this.setState({ text: "Та гарчигаа оруулна уу!!!" });
    }
    if (newHistory.content === "") {
      this.setState({ text: "Та тэмдэглэлээ бичнэ үү!!!" });
    }
    if (newHistory.date === "") {
      this.setState({ text: "Та он сараа өдрөө оруулна уу!!!" });
    }
    if (
      newHistory.title !== "" &&
      newHistory.content !== "" &&
      newHistory.date !== ""
    ) {
      axios.post("/histories.json", newHistory).then(() => {
        this.setState({ text: "" });
        this.setState({ content: "" });
        this.setState({ title: "" });
        this.setState({ date: "" });
      });
    }
    axios
      .get(`histories.json?orderBy="userID"&equalTo="${this.props.id}"`)
      .then((response) => {
        this.setState({ histories: Object.entries(response.data).reverse() });
      });
  };
  changeContent = (e) => {
    this.setState({ content: e.target.value });
  };
  toggleHist = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    axios
      .get(`histories.json?orderBy="userID"&equalTo="${this.props.id}"`)
      .then((response) => {
        this.setState({ histories: Object.entries(response.data).reverse() });
      })
      .catch(() => {
        let a = {
          content: "",
          title: "",
        };
        axios.post("/histories.json", a);
      });
    return (
      <div className={css.MainPage}>
        <img className={css.backImage} src={img} />
        {!this.props.id && this.props.history.replace("/")}
        <div>
          <p className={css.yourStories}>ТАНЫ ТҮҮХҮҮД</p>
          {this.state.histories.length !== 0 && (
            <Histories data={this.state.histories} />
          )}
          <div className={css.btnCont}>
            <Link to={`/mainpage${this.state.open ? "/hist" : ""}`}>
              <button onClick={this.toggleHist}>Түүх нэмэх</button>
            </Link>
          </div>
          {
            <Route path="/mainpage/hist">
              <AddHistory
                changeTitle={this.changeTitle}
                changeContent={this.changeContent}
                saveHistory={this.saveHistory}
                changeDate={this.changeDate}
                text={this.state.text}
              />
            </Route>
          }
        </div>
        <Link to="/">
          <i className="fas fa-power-off"></i>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    id: state.id,
  };
};
export default connect(mapStateToProps)(MainPage);
