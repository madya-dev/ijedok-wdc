import LoginForm from "parts/LoginForm";
import React, { Component } from "react";
import "react-phone-number-input/style.css";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="bg-green-400 fixed w-full h-screen px-5">
        <LoginForm />
      </div>
    );
  }
}
