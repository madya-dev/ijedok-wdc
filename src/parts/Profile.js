import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import Button from "elements/Button";
import { Link } from "react-router-dom";
export default function Profile() {
  const [value, setValue] = useState("+6285157349882");
  const [name, setName] = useState("Madya Santosa");

  function handleLogout(e) {
    e.preventDefault();
    sessionStorage.removeItem("masuk");
    window.location.href = "/";
  }
  if (sessionStorage.getItem("masuk") != "yes") {
    window.location.href = "/masuk";
  }
  function handleChange(checkbox) {
    console.log(checkbox);
    // if (checkbox.checked == true) {
    //   document.getElementById("newPass").classList.remove("hidden");
    // } else {
    //   document.getElementById("newPass").classList.add("hidden");
    // }
  }
  return (
    <div className=" w-full  md:w-3/6 xl:w-2/5 md:mx-auto my-5 md:shadow-lg md:rounded-lg p-5 bg-white md:border-2 mb-32">
      <form method="post">
        <h2 className="text-xl font-medium text-left my-3">Profile</h2>
        <hr />
        <div className="w-full my-3 flex items-center flex-col">
          <img
            src="/image/testimoni/man-2.jpg"
            className="w-24 h-24 rounded-full "
          ></img>
          <input
            type="text"
            className="w-full rounded-md focus:outline-none px-2 py-1 font-medium text-center text-2xl mt-2 bg-white"
            placeholder="Masukan nama kamu"
            name="nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled
          ></input>
          <Link
            type="button"
            onClick={(e) => handleLogout(e)}
            className="font-normal text-red-400 flex gap-1 items-center bg-none"
          >
            <ion-icon name="log-out-outline"></ion-icon> keluar
          </Link>
        </div>
        <hr />
        <div className="form-group my-3">
          <label className="font-medium">Telepon</label>
          <PhoneInput
            className="input-telp w-full rounded-md focus:outline-none px-2 py-1 text-normal mt-2 bg-white"
            disabled
            placeholder="Masukan nomor telepon kamu"
            value={value}
            onChange={setValue}
            name="telepon"
          />
        </div>
        <hr />
        <div className=" my-3">
          <Button type="link" href="/chat">
            <p className="font-normal">Chat Dokter</p>
          </Button>
        </div>
        <hr />
        <div className=" my-3">
          <Button type="link" href="#">
            <p className="font-normal">Perbarui Profil</p>
          </Button>
        </div>
        <hr />
        <div className=" my-3">
          <Button type="link" href="#">
            <p className="font-normal">Ubah kata sandi</p>
          </Button>
        </div>
      </form>
    </div>
  );
}
