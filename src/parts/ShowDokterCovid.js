import React from "react";
import DokterData from "json/Dokter.json";
import CardDokter from "./CardDokter";
export default function ShowDokterCovid() {
  let DataDokter = [];

  DataDokter = DokterData.filter((i) => {
    return i.covid19Access == true;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8 ">
      {DataDokter.map((item, index) => {
        return (
          <CardDokter
            name={item.name}
            profesi={item.profesi}
            experience={item.experience}
            responden={item.responden}
            star={item.star}
            image={item.image}
            href={`chat/${item.id}`}
            key={`card-${index}`}
          />
        );
      })}
    </div>
  );
}
