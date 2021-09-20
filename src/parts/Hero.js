import React from "react";
import Button from "elements/Button";
import IllustrasiHero from "assets/images/illustrasi/hero.svg";
export default function Hero(props) {
  function showMenu() {
    window.scrollTo({
      top: props.refMenu.current.offsetTop - 70,
      behavior: "smooth",
    });
  }
  return (
    <div className="hero  grid  grid-cols-1 lg:grid-cols-2 px-5 lg:px-16 xl:pb-32 xl:px-32">
      <div className="hero-text 2xl:py-32 py-16 lg:py-24 lg:order-1 order-2 lg:text-left text-center">
        <h1 className="text-black font-semibold md:text-3xl xl:text-4xl 2xl:text-6xl lg:w-2/3 mb-3 leading-normal text-2xl">
          <span className="text-green-400 leading-tight">Ijedok</span> untuk
          Masyarakat <span className="text-green-400 leading-tight">Sehat</span>
        </h1>
        <p className="text-base lg:w-2/3 mb-5">
          Dapatkan informasi tentang kesehatan dengan konsultasi bersama dokter
          secara gratis.
        </p>
        <Button
          className="text-base font-medium text-white bg-green-400 px-8 py-2 rounded-lg shadow-xl hover:bg-green-500"
          onClick={showMenu}
        >
          Mulai
        </Button>
      </div>
      <div className="w-full lg:order-2 order-1 pt-16">
        {/* https://storyset.com/illustration/online-doctor/cuate */}
        <img src={IllustrasiHero} />
      </div>
    </div>
  );
}
