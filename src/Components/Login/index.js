import React from "react";
import css from "./style.module.css";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../redux/actions/getIDactions";
import { Link } from "react-router-dom";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  login = () => {
    const data = {
      email: this.state.email,
      password: this.state.password,
      userId: "",
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB3Zpu3mPVymr0Ef3qq9l_wza9xzXn9-XU",
        data
      )
      .then((result) => {
        this.setState({ userId: result.data.localId });
        this.props.getIDaction(this.state.userId);
        this.props.history.replace("/mainpage");
      })
      .catch((err) => {
        this.setState({ error: "Нэвтрэлт амжилтгүй" });
      });
  };
  render() {
    return (
      <div className={css.container}>
        <div className={css.brandLogo}></div>
        <div className={css.brandTitle}>LOGIN</div>
        <div className={css.inputs}>
          <label>EMAIL</label>
          <input
            onChange={this.changeEmail}
            type="email"
            placeholder="example@test.com"
          />
          <label>PASSWORD</label>
          <input
            onChange={this.changePassword}
            type="password"
            placeholder="Min 6 charaters long"
          />
          {this.state.error && <p className={css.error}>{this.state.error}</p>}
          <button onClick={this.login}>LOGIN</button>
        </div>
        <Link to="reg">
          <div className={css.reg} className={css.Button}>
            REGISTER
          </div>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getIDaction: (id) => dispatch(actions.getID(id)),
  };
};
export default connect(null, mapDispatchToProps)(withRouter(Login));
