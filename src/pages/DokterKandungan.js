import BreadCrumb from "elements/BreadCrumb";
import Footer from "parts/Footer";
import Header from "parts/Header";
import ShowSpesialisKandungan from "parts/ShowSpesialisKandungan";
import React, { Component } from "react";

export default class DokterKandungan extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Beranda", pageHref: "/" },
      { pageTitle: "Konsultasi Dokter", pageHref: "/konsultasi-dokter" },
      { pageTitle: "Spesialis Kandungan", pageHref: "" },
    ];
    return (
      <>
        <Header />
        <div className="px-5  lg:px-16  xl:px-32  mt-16 mb-24">
          <BreadCrumb data={breadcrumb} />
          <h2 className="text-2xl font-medium mb-8   ">
            Daftar Spesialis Kandungan
          </h2>
          <ShowSpesialisKandungan />
        </div>
        <Footer />
      </>
    );
  }
}
