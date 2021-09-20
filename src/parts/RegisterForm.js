import Button from "elements/Button";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
export default function RegisterForm() {
  const [value, setValue] = useState();

  function handleForm(e) {
    e.preventDefault();
    let x = e.target.children;

    function handleInput(i) {
      if (x[i].children[1].value == "") {
        x[i].children[1].classList.add("border-red-400");
        x[i].children[1].nextSibling.classList.remove("hidden");
        return false;
      } else {
        x[i].children[1].classList.remove("border-red-400");
        x[i].children[1].nextSibling.classList.add("hidden");
        return false;
      }
    }

    handleInput(0);
    handleInput(2);
    function handlePw() {
      if (
        x[2].children[1].value != "" &&
        x[2].children[1].value !== x[3].children[1].value
      ) {
        x[3].children[1].classList.add("border-red-400");
        x[3].children[1].nextSibling.classList.remove("hidden");
      } else {
        x[3].children[1].classList.remove("border-red-400");
        x[3].children[1].nextSibling.classList.add("hidden");
        return false;
      }
    }
    function handleTelp() {
      if (x[1].children[1].children[1].value == "") {
        x[1].children[1].classList.add("border-red-400");
        x[1].children[1].nextSibling.classList.remove("hidden");
        return true;
      } else {
        x[1].children[1].classList.remove("border-red-400");
        x[1].children[1].nextSibling.classList.add("hidden");
        return false;
      }
    }

    if (
      handleInput(0) == false &&
      handleInput(2) == false &&
      handlePw() == false &&
      handleTelp() === false
    ) {
      window.location.href = "/masuk";
    }
  }
  return (
    <div className=" w-full  md:w-3/6 xl:w-2/5 md:mx-auto my-5  rounded-lg p-5 bg-white">
      <h1 className="text-xl font-medium text-center">Daftar Akun</h1>
      <p className="text-center font-light text-gray-400">
        Daftarkan diri anda agar dapat berkonsultasi dengan dokter.
      </p>
      <form method="post" onSubmit={(e) => handleForm(e)}>
        <div className="form-group my-3">
          <label className="font-medium">
            Nama Pengguna <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            className="border-2 w-full rounded-md focus:outline-none px-2 py-1 text-normal mt-2"
            placeholder="Masukan nama kamu"
            name="nama"
          ></input>
          <em className="text-red-400 font-light text-sm hidden">
            Nama tidak boleh kosong
          </em>
        </div>
        <div className="form-group my-3">
          <label className="font-medium">
            Telepon <span className="text-red-400">*</span>
          </label>
          <PhoneInput
            className="input-telp border-2 w-full rounded-md focus:outline-none px-2 py-1 text-normal mt-2"
            placeholder="Masukan nomor telepon kamu"
            value={value}
            onChange={setValue}
            name="telepon"
          />
          <em className="text-red-400 font-light text-sm hidden">
            Nomor telepon tidak boleh kosong
          </em>
        </div>
        <div className="form-group my-3">
          <label className="font-medium">
            Kata Sandi <span className="text-red-400">*</span>
          </label>
          <input
            type="password"
            className="border-2 w-full rounded-md focus:outline-none px-2 py-1 text-normal mt-2"
            placeholder="Masukan kata sandi kamu"
            name="password1"
          ></input>
          <em className="text-red-400 font-light text-sm hidden">
            Kata sandi tidak boleh kosong
          </em>
        </div>
        <div className="form-group my-3">
          <label className="font-medium">
            Konfirmasi Kata Sandi <span className="text-red-400">*</span>
          </label>
          <input
            type="password"
            className="border-2 w-full rounded-md focus:outline-none px-2 py-1 text-normal mt-2"
            placeholder="Masukan ulang kata sandi kamu"
            name="password2"
          ></input>
          <em className="text-red-400 font-light text-sm hidden">
            {" "}
            Kata sandi tidak sama
          </em>
        </div>
        <Button
          className="w-full bg-green-400 text-white rounded-lg px-5 py-2 my-3"
          type="button"
        >
          Daftar
        </Button>
      </form>
      <p className="text-center text-sm mt-5">
        Sudah punya akun?{" "}
        <Button className="text-green-400 " type="link" href="masuk">
          masuk
        </Button>
      </p>
    </div>
  );
}
