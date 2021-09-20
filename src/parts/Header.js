import React from "react";
import Button from "elements/Button";
import Logo from "./Logo.js";
export default function Header() {
  return (
    <div className="topbar flex items-center justify-between px-5 lg:px-16  xl:px-32 w-full p-3 bg-white z-10 ">
      <Button type="link" href="/">
        <Logo />
      </Button>
      <Button
        type="link"
        href="/masuk"
        className={`border-2 border-green-400 px-3 py-1 rounded-md text-green-400 hover:bg-green-400 hover:text-white ${
          sessionStorage.getItem("masuk") === "yes" ? "hidden" : ""
        }`}
      >
        Masuk
      </Button>
      <div
        className={`flex gap-5 items-center ${
          sessionStorage.getItem("masuk") !== "yes" ? "hidden" : ""
        }`}
      >
        <Button type="link" href="/chat" className="text-green-400 text-2xl">
          <ion-icon name="chatbubbles-outline"></ion-icon>
          {/* <sup className=" ">1</sup> */}
        </Button>
        <Button type="link" href="/profile">
          <img src="/image/testimoni/man-2.jpg" className="rounded-full w-10" />
        </Button>
      </div>
    </div>
  );
}
