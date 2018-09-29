import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Product from "./routes/Product";
import User from "./routes/User";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/add-product" component={Product} />
        <Route path="/add-user" component={User} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
