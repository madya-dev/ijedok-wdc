import Button from "elements/Button";
import React from "react";

export default function DetailATR(props) {
  return (
    <div className="grid lg:grid-cols-2 gap-5 lg:grid-cols-2 px-5 lg:px-16 xl:pb-32 xl:px-32 pb-32">
      <img src={props.data.image} className="w-full h-auto"></img>
      <div>
        <h1 className="text-2xl font-medium">{props.data.name}</h1>
        <p className="text-gray-400 text-lg my-3">{props.data.role}</p>
        <p className="text-gray-400 text-lg my-3">
          Hari : <span className="text-black">{`${props.data.date}`}</span>
        </p>
        <p className="text-gray-400 text-lg my-3">
          Buka :{" "}
          <span className="text-black">{`${props.data.buka} - ${props.data.tutup} WITA`}</span>
        </p>
        {props.page == "test-covid" ? (
          <ul
            className={`my-3 ${
              props.data.antibodi == null &&
              props.data.antigen == null &&
              props.data.pcr == null
                ? "hidden"
                : ""
            }`}
          >
            <p className="text-gray-400 text-lg my-3">Daftar Harga:</p>
            {props.data.antibodi != null ? (
              <li className="ml-8">
                Rapid Antibodi :{" "}
                <span className="text-red-400">Rp {props.data.antibodi}</span>
              </li>
            ) : (
              ""
            )}
            {props.data.antigen != null ? (
              <li className="ml-8">
                Swab Antigen :{" "}
                <span className="text-red-400">Rp {props.data.antigen}</span>
              </li>
            ) : (
              ""
            )}
            {props.data.pcr != null ? (
              <li className="ml-8">
                Swab PCR :{" "}
                <span className="text-red-400">Rp {props.data.pcr}</span>
              </li>
            ) : (
              ""
            )}
          </ul>
        ) : (
          ""
        )}
        {props.page == "vaksinasi" ? (
          <div className="my-3">
            <p className="text-gray-400 text-lg my-3">Catatan:</p>
            <p className="text-black text-lg ml-8">{props.data.note}</p>
          </div>
        ) : (
          ""
        )}
        <div className="google-map-code mb-5">
          <iframe
            src={props.data.iframe}
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex gap-3">
          <Button
            type="link"
            href={`telp:${props.data.telepon}`}
            isExternal
            className="border-2 border-green-400 rounded-lg px-5 py-2 text-green-400 hover:bg-green-400 hover:text-white"
          >
            Telepon {props.data.role}
          </Button>
          <Button
            type="link"
            className="border-2 border-green-400 rounded-lg px-5 py-2 text-green-400 hover:bg-green-400 hover:text-white"
            href={props.data.link}
            isExternal
          >
            Petunjuk Lokasi
          </Button>
        </div>
      </div>
    </div>
  );
}
// title = "";
// role = "Puskesmas";
// address = "Jl. Kehen No. 1 Br. Tembuku Kawan, Kec. Tembuku, Kab. Bangli";
