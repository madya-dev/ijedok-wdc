import React from "react";
import Button from "elements/Button";
import exp from "assets/images/icon/ex.svg";
import star from "assets/images/icon/star.svg";
export default function CardDokter(props) {
  return (
    <div className="card-dokter bg-white shadow-md px-4 pb-8 py-16 rounded-lg flex flex-col items-center h-full relative ">
      <div className="flex gap-1 absolute left-4 top-3">
        <img src={exp} />{" "}
        <span>
          {`${props.experience} `}
          <span className="text-gray-400">tahun</span>
        </span>
      </div>
      <div className="flex gap-1 absolute right-4 top-3">
        <img src={star} />{" "}
        <span>
          {`${props.star} `}
          <span className="text-gray-400">({props.responden})</span>
        </span>
      </div>
      <div className="image-card mb-4">
        <img src={props.image} className="w-full" alt={props.name} />
      </div>
      <h5 className="font-medium text-xl text-center">{props.name}</h5>
      <p className="text-center text-gray-400 text-normal mb-5 mt-2">
        {props.profesi}
      </p>
      <Button
        className="w-full bg-green-400 hover:bg-green-500 text-white py-2 font-medium rounded-lg text-center"
        type="link"
        href={props.href}
      >
        Konsultasi
      </Button>
    </div>
  );
}
