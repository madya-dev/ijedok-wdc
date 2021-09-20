import Button from "elements/Button";
import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-200 ">
      <div className="grid lg:grid-cols-3 px-5 lg:px-16  xl:px-32 py-8">
        <div className="grid grid-cols-1 mb-5">
          <Logo />
          <p className="mt-3 font-light">
            Ijedok adalah sebuah website yang dibuat untuk membantu masyarakat
            mendapatkan informasi mengenai kesehatan dengan berkonsultasi
            bersama dokter dan informasi tentang covid-19 serta lokasi apotek.
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div className="px-2 mb-5">
            <h5 className="font-medium mb-5">Tentang Kami</h5>
            <div className="click flex flex-col">
              <Button
                type="link"
                href="/testimoni"
                className="font-light mb-3 "
              >
                Testimoni
              </Button>
              <Button type="link" href="#" className="font-light mb-3">
                FAQ
              </Button>
            </div>
          </div>
          <div className="px-2 mb-5">
            <h5 className="font-medium mb-5">Hukum</h5>
            <div className="click flex flex-col">
              <Button type="link" href="#" className="font-light mb-3 ">
                Syarat & Ketentuan
              </Button>
              <Button type="link" href="#" className="font-light mb-3">
                Kebijakan Privasi
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="px-2 mb-5">
            <h5 className="font-medium mb-5">Kontak</h5>
            <div className="click flex flex-col">
              <Button
                type="link"
                href="mailto:ijedok@gmail.com"
                className="font-light mb-3 "
                isExternal
              >
                ijedok@gmail.com
              </Button>
              <Button type="link" href="#" className="font-light mb-3">
                0851-5734-9882
              </Button>
            </div>
          </div>
          <div className="px-2 mb-5">
            <h5 className="font-medium mb-5">Ikuti Kami</h5>
            <div className="click flex flex-col">
              <Button type="link" href="#" className="font-light mb-3 ">
                Facebook
              </Button>
              <Button type="link" href="#" className="font-light mb-3">
                Instagram
              </Button>
              <Button type="link" href="#" className="font-light mb-3">
                Twitter
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrigth py-4 bg-gray-300 px-5 text-center">
        ©IJEDOK, 2021. ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
