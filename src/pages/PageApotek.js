import Apotek from "parts/Apotek";
import BreadCrumb from "elements/BreadCrumb";
import Footer from "parts/Footer";
import Header from "parts/Header";
import React, { Component } from "react";

export default class PageApotek extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Beranda", pageHref: "/" },
      { pageTitle: "Temukan Apotek", pageHref: "" },
    ];
    return (
      <div className="">
        <Header />
        <div className="px-5  lg:px-16  xl:px-32  mt-16">
          <BreadCrumb data={breadcrumb} />
        </div>
        <Apotek />
        <Footer />
      </div>
    );
  }
}
