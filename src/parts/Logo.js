import React from "react";
import LogoImage from "assets/images/logo/logo.svg";

export default function Logo() {
  return (
    <div className="logo flex items-center gap-2 text-xl font-weigth-normal">
      {/* https://www.flaticon.com/free-icon/doctor_607414?related_id=607414 */}
      <img src={LogoImage} /> <span>Ijedok</span>
    </div>
  );
}
