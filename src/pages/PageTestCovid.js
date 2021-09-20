import BreadCrumb from "elements/BreadCrumb";
import Footer from "parts/Footer";
import Header from "parts/Header";
import React, { Component } from "react";
import TestCovid from "parts/TestCovid";

export default class PageTestCovid extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Beranda", pageHref: "/" },
      { pageTitle: "Test Covid-19", pageHref: "" },
    ];
    return (
      <div className="">
        <Header />
        <div className="px-5  lg:px-16  xl:px-32  mt-16">
          <BreadCrumb data={breadcrumb} />
        </div>
        <TestCovid />
        <Footer />
      </div>
    );
  }
}
