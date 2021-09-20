import React, { Component } from "react";
import DetailATR from "parts/DetailATR";
import Header from "parts/Header";
import Footer from "parts/Footer";
import BreadCrumb from "elements/BreadCrumb";
import TestCovidDetailData from "json/TestCovidDetail.json";

export default class PageDetailTestCovid extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Beranda", pageHref: "/" },
      { pageTitle: "Test Covid-19", pageHref: "/tes-covid19" },
      { pageTitle: "Detail Tes Covid-19", pageHref: "" },
    ];
    return (
      <div className="">
        <Header />
        <div className="px-5  lg:px-16  xl:px-32  mt-16">
          <BreadCrumb data={breadcrumb} />
        </div>
        <DetailATR data={TestCovidDetailData} page={"test-covid"} />
        <Footer />
      </div>
    );
  }
}
