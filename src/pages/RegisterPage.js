import RegisterForm from "parts/RegisterForm";
import React, { Component } from "react";
import "react-phone-number-input/style.css";

export default class RegisterPage extends Component {
  render() {
    return (
      <div className="bg-green-400 fixed w-full h-screen px-5">
        <RegisterForm />
      </div>
    );
  }
}
