import React, { Component } from "react";
import css from "./style.module.css";
import axios from "axios";
import Hamburger from "hamburger-react";
import SideBar1 from "../../Components/SideBar1";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class Register extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    error: "",
    isOpen: false,
  };
  setOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  register = () => {
    if (this.state.password1 === this.state.password2) {
      const data = {
        email: this.state.email,
        password: this.state.password1,
        returnSecureToken: true,
      };
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB3Zpu3mPVymr0Ef3qq9l_wza9xzXn9-XU",
          data
        )
        .then((result) => {
          this.setState({
            error: "Бүртгэл амжилттай",
          });
          this.props.history.replace("/");
          console.log(result);
        })
        .catch(() => {
          this.setState({
            error: "Бүртгэлтэй хэрэглэгч байна!!!",
          });
        });
    } else this.setState({ error: "Нууц үгнүүд таарахгүй байна" });
  };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  pass1 = (e) => {
    this.setState({ password1: e.target.value });
  };

  pass2 = (e) => {
    this.setState({ password2: e.target.value });
  };

  render() {
    return (
      <div className={css.container}>
        <div className={css.Menu}>
          <Hamburger toggled={this.state.isOpen} toggle={this.setOpen} />
        </div>
        {this.state.isOpen && <SideBar1 />}
        <div className={css.Signup}>
          <div className={css.brandLogo}></div>
          <div className={css.brandTitle}>REGISTER</div>
          <input
            onChange={this.changeEmail}
            type="text"
            placeholder="Имэйл хаяг"
          />
          <input
            onChange={this.pass1}
            type="password"
            placeholder="Нууц үгээ оруулна уу"
          />
          <input
            onChange={this.pass2}
            type="password"
            placeholder="Нууц үгээ давтан оруулна уу"
          />
          {this.state.error && <p className={css.error}>{this.state.error}</p>}
          <button className={css.btn} onClick={this.register}>
            REGISTER
          </button>
          <Link to="/">
            <div className={css.lgn}>LOGIN</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Register;
