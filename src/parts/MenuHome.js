import React from "react";
import Button from "elements/Button";
import Konsultasi from "assets/images/thumb/konsultasi-dokter.svg";
import Apotek from "assets/images/thumb/apotek.svg";
import TestC19 from "assets/images/thumb/test-covid19.svg";
import Vaksinasi from "assets/images/thumb/vaksinasi.svg";
import CardMenu from "./CardMenu";
export default function MenuHome(props) {
  return (
    <section
      className="section-menu px-5 lg:px-16 xl:px-32 mt-32 mb-32"
      ref={props.refMenu}
    >
      <h2 className="text-2xl font-medium mb-8 ">Kamu ingin apa?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8 ">
        {/* https://www.flaticon.com/free-icon/doctor_387562?term=doctor&page=1&position=6&page=1&position=6&related_id=387562&origin=search */}
        <CardMenu
          href="/konsultasi-dokter"
          name={`Konsultasi Dokter`}
          image={Konsultasi}
        />
        {/* https://www.flaticon.com/free-icon/syringe_2966553?term=vaccine&page=1&position=19&page=1&position=19&related_id=2966553&origin=search */}
        <CardMenu
          href="/vaksinasi-covid19"
          name={`Vaksinasi Covid-19`}
          image={Vaksinasi}
        />
        {/* https://www.flaticon.com/free-icon/covid-test_4145179?term=test%20covid&page=1&position=9&page=1&position=9&related_id=4145179&origin=search */}
        <CardMenu href="/tes-covid19" name={`Tes Covid-19`} image={TestC19} />
        {/* https://www.flaticon.com/free-icon/drugstore_4320357?term=pharmacy&page=1&position=2&page=1&position=2&related_id=4320357&origin=search */}
        <CardMenu href="/apotek" name={`Temukan Apotek`} image={Apotek} />{" "}
      </div>
    </section>
  );
}
