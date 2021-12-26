import css from "./style.module.css";
import React from "react";
import StartPage from "./StartPage";
import { Route, Switch } from "react-router-dom";
import Register from "./Register";
import MainPage from "../Components/MainPage";
import MoreHist from "../Components/MoreHist";
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/more" component={MoreHist} />
          <Route path="/reg" component={Register} />
          <Route path="/mainpage" component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
