import React from "react";
import ReactDOM from "react-dom";
import App from "./Pages/App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./redux/reducers/reducer";
const store = createStore(Reducer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
