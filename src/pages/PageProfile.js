import Footer from "parts/Footer";
import Header from "parts/Header";
import Profile from "parts/Profile";
import React, { Component } from "react";

export default class PageProfile extends Component {
  render() {
    return (
      <div>
        <Header />
        <Profile />
        <Footer />
      </div>
    );
  }
}
