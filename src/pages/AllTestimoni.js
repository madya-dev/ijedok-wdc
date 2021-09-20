import React, { Component } from "react";
import Header from "parts/Header";
import TestimoniData from "json/Testimoni.json";
import CardTestimoni from "parts/CardTestimoni";
import BreadCrumb from "elements/BreadCrumb";
import Footer from "parts/Footer";
export default class AllTestimoni extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Beranda", pageHref: "/" },
      { pageTitle: "Testimoni", pageHref: "" },
    ];
    return (
      <>
        <Header />
        <div className=" px-5  lg:px-16 xl:pb-32 xl:px-32  mt-16 mb-32 ">
          <BreadCrumb data={breadcrumb} />
          <div className="flex items-center flex-col">
            <h2 className="text-2xl font-medium mb-2 px-5 text-center ">
              Apa kata mereka?
            </h2>

            <p className="text-lg font-normal text-gray-400 mb-8 px-5 text-center sm:w-2/3">
              Berikut adalah pendapat pengguna mengenai Ijedok. Ayo permudah
              mengetahui kondisi kesehatan dengan menggunakan Ijedok.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {TestimoniData.map((item, index) => {
              return (
                <CardTestimoni
                  name={item.name}
                  message={item.message}
                  photo={item.photo}
                  key={`testimoni-${index}`}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
