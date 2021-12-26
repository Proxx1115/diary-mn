import React from "react";
import css from "./style.module.css";
import Hamburger from "hamburger-react";
import SideBar from "../../Components/Sidebar";
import Login from "../../Components/Login";
class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  setOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div className={css.StartPage}>
        <div className={css.Menu}>
          <Hamburger toggled={this.state.isOpen} toggle={this.setOpen} />
        </div>
        {this.state.isOpen && <SideBar state={this.state.isOpen} />}
        <div className={css.StartPageLeft}>
          <Login />
        </div>
      </div>
    );
  }
}
export default StartPage;
