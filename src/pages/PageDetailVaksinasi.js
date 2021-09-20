import React, { Component } from "react";
import DetailATR from "parts/DetailATR";
import Header from "parts/Header";
import Footer from "parts/Footer";
import BreadCrumb from "elements/BreadCrumb";
import VaksinasiDetailData from "json/VaksinasiDetail.json";

export default class PageDetailVaksinasi extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Beranda", pageHref: "/" },
      { pageTitle: "Vaksinasi", pageHref: "/vaksinasi-covid19" },
      { pageTitle: "Detail Vaksinasi", pageHref: "" },
    ];
    return (
      <div className="">
        <Header />
        <div className="px-5  lg:px-16  xl:px-32  mt-16">
          <BreadCrumb data={breadcrumb} />
        </div>
        <DetailATR data={VaksinasiDetailData} page={"vaksinasi"} />
        <Footer />
      </div>
    );
  }
}
