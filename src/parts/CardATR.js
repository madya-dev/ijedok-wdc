import React from "react";

export default function CardATR(props) {
  return (
    <div className="  w-full h-full my-3">
      <div className="bg-white shadow-md  rounded-lg p-2  h-full flex md:flex-row flex-col gap-2">
        <div
          className="image w-full h-52 md:h-auto  md:w-32  xl:h-auto xl:w-3/6 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div className="flex justify-between flex-col my-2">
          <div>
            <h5 className="text-xl font-medium">{props.title}</h5>
            <p className="text-gray-400 text-normal">{props.role}</p>
            {props.page == "test-covid" ? (
              <p className="text-red-400 text-normal">
                Rp {props.minPrice} - {props.maxPrice}
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            <p className="text-gray-400 text-normal">{props.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
