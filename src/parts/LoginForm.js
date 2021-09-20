import Button from "elements/Button";
import React, { useState } from "react";
export default function LoginForm() {
  function handleForm(e) {
    e.preventDefault();
    sessionStorage.setItem("masuk", "yes");
    window.location.href = "/profile";
  }
  return (
    <div className=" w-full  md:w-3/6 xl:w-2/5 md:mx-auto my-5  rounded-lg p-5 bg-white">
      <h1 className="text-xl font-medium text-center">Masuk</h1>
      <p className="text-center font-light text-gray-400">
        Masuk dengan akun anda.
      </p>
      <form method="post" onSubmit={(e) => handleForm(e)}>
        <div className="form-group my-3">
          <label className="font-medium">Nama Pengguna</label>
          <input
            type="text"
            className="border-2 w-full rounded-md focus:outline-none px-2 py-1 text-normal mt-2"
            placeholder="Masukan nama kamu"
            name="nama"
          ></input>
        </div>

        <div className="form-group my-3">
          <label className="font-medium">Kata Sandi</label>
          <input
            type="password"
            className="border-2 w-full rounded-md focus:outline-none px-2 py-1 text-normal mt-2"
            placeholder="Masukan kata sandi kamu"
            name="password1"
          ></input>
        </div>

        <Button
          className="w-full bg-green-400 text-white rounded-lg px-5 py-2 my-3 mb-5"
          type="button"
        >
          Masuk
        </Button>
      </form>
      <div className="flex flex-wrap gap-5 justify-between">
        <p className="text-center text-sm ">
          Belum punya akun?{" "}
          <Button className="text-green-400 " type="link" href="/daftar">
            Daftar
          </Button>
        </p>
        <p className="text-center text-sm ">
          <Button
            className="text-green-400 "
            type="link"
            href="/ganti-kata-sandi"
          >
            Lupa kata sandi?{" "}
          </Button>
        </p>
      </div>
    </div>
  );
}
