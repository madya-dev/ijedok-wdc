import React, { Component } from "react";
import DetailATR from "parts/DetailATR";
import Header from "parts/Header";
import Footer from "parts/Footer";
import BreadCrumb from "elements/BreadCrumb";
import ApotekDetailData from "json/ApotekDetail.json";

export default class PageDetailApotek extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Beranda", pageHref: "/" },
      { pageTitle: "Temukan Apotek", pageHref: "/apotek" },
      { pageTitle: "Detail Apotek", pageHref: "" },
    ];
    return (
      <div className="">
        <Header />
        <div className="px-5  lg:px-16  xl:px-32  mt-16">
          <BreadCrumb data={breadcrumb} />
        </div>
        <DetailATR data={ApotekDetailData} page={"apotek"} />
        <Footer />
      </div>
    );
  }
}
