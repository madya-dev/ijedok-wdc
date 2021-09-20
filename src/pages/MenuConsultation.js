import React, { Component } from "react";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Consultation from "parts/Consultation";
import BreadCrumb from "elements/BreadCrumb";

export default class MenuConsultation extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Beranda", pageHref: "/" },
      { pageTitle: "Konsultasi Dokter", pageHref: "" },
    ];
    return (
      <>
        <Header />
        <div className="px-5  lg:px-16  xl:px-32  mt-16">
          <BreadCrumb data={breadcrumb} />
        </div>
        <Consultation />
        <Footer />
      </>
    );
  }
}
