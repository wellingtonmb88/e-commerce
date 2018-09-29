import React, { Component } from "react";
import LoginContent from "../components/LoginContent";
import CustomAppBar from "../components/CustomAppBar";

export default class Login extends Component {
  render() {
    return (
      <div className="App">
        <CustomAppBar />
        <LoginContent />
      </div>
    );
  }
}
