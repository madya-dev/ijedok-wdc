import React, { useState } from "react";
import DokterData from "json/Dokter.json";
import CardMenu from "./CardMenu";

import DokterUmum from "assets/images/thumb/dokter-umum.svg";
import Anak from "assets/images/thumb/anak.svg";
import C19 from "assets/images/thumb/covid-19.svg";
import Kandungan from "assets/images/thumb/kandungan.svg";
import CardDokter from "./CardDokter";

export default function Consultation() {
  const [search, setSearch] = useState("");
  let DataDokter = [];

  if (search.length > 0) {
    DataDokter = DokterData.filter((i) => {
      return i.name.toUpperCase().match(search.toUpperCase());
    });
  }
  return (
    <div className=" px-5  lg:px-16 xl:pb-32 xl:px-32   mb-24">
      <h2 className="text-2xl font-medium mb-2  ">Konsultasi dengan Dokter</h2>
      <p className="text-lg font-normal text-gray-400 mb-8 ">
        Pilih kategori dan temukan dokter untuk menjawab pertanyaan seputar
        medis untuk kamu
      </p>

      <form className="flex justify-center relative">
        <div className="relative left-8 top-5 text-gray-400">
          <ion-icon name="search-outline" size="small"></ion-icon>
        </div>
        <input
          type="search"
          className=" bg-white shadow-md rounded-lg hover:shadow-lg focus:shadow-lg  focus:outline-none py-3 pl-10 pr-2 text-xl w-full sm:w-2/3"
          placeholder="cari nama dokter atau spesialis..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="mt-24">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8 "
          key={`dokter`}
        >
          {DataDokter.length > 0 ? (
            DataDokter.map((item, index) => {
              return (
                <CardDokter
                  name={item.name}
                  profesi={item.profesi}
                  experience={item.experience}
                  responden={item.responden}
                  star={item.star}
                  image={item.image}
                  href={`chat/${item.id}`}
                  key={`card-dokter-${index}`}
                />
              );
            })
          ) : (
            <>
              {/* https://www.flaticon.com/free-icon/doctor_3774299?term=doctors&page=1&position=64&page=1&position=64&related_id=3774299&origin=search */}
              <CardMenu
                href="/dokter-umum"
                name={`Dokter Umum`}
                image={DokterUmum}
              />
              {/* https://www.flaticon.com/free-icon/coronavirus_2913604?term=covid&page=1&position=20&page=1&position=20&related_id=2913604&origin=search */}
              <CardMenu
                href="/dokter-penanganan-covid-19"
                name={`Covid-19`}
                image={C19}
              />
              {/* https://www.flaticon.com/free-icon/children_3885025?term=child&page=1&position=6&page=1&position=6&related_id=3885025&origin=search */}
              <CardMenu
                href="/spesialis-anak"
                name={`Spesialis Anak`}
                image={Anak}
              />
              {/* https://www.flaticon.com/free-icon/womb_2372727?term=womb&page=1&position=2&page=1&position=2&related_id=2372727&origin=search */}
              <CardMenu
                href="/spesialis-kandungan"
                name={`Spesialis Kandungan`}
                image={Kandungan}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
