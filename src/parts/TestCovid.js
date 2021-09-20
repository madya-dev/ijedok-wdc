import React from "react";
import CardATR from "parts/CardATR";
import Button from "elements/Button";
import TestCovidData from "json/TestCovid.json";
export default function TestCovid() {
  return (
    <div className="px-5 lg:px-16  xl:px-32 xl:pb-32 xl:px-32 mt-5 pb-32">
      <div className="flex mb-8 flex-col sm:flex-row gap-3">
        <div className="form-group flex items-center gap-2">
          <label>Pilih Lokasi</label>
          <select className="shadow-md focus:shadow-lg w-52 rounded-md focus:outline-none px-2 py-2 text-normal mt-2">
            <option value="0">Terdekat</option>
            <option value="0">Semua Lokasi</option>
            <option value="1">Aceh</option>
            <option value="1">Bali</option>
            <option value="1">Bengkulu</option>
            <option value="1">Lampung</option>
            <option value="1">NTB</option>
            <option value="1">NTT</option>
          </select>
        </div>
        <form className="flex  relative w-full">
          <div className="relative left-8 top-5 text-gray-400">
            <ion-icon name="search-outline" size="small"></ion-icon>
          </div>
          <input
            type="search"
            className=" bg-white shadow-md rounded-lg hover:shadow-lg focus:shadow-lg  focus:outline-none py-3 pl-10 pr-2 text-xl w-full "
            placeholder="cari..."
            //   onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="grid xl:grid-cols-2  gap-5">
        {TestCovidData.map((item, index) => {
          return (
            <Button
              className="text-left "
              type="link"
              href={`/tes-covid19/${item.id}`}
              key={`tes-covid19-${index}`}
            >
              <CardATR
                image={item.image}
                title={item.name}
                role={item.role}
                address={item.alamat}
                minPrice={item.minPrice}
                maxPrice={item.maxPrice}
                page="test-covid"
              />
            </Button>
          );
        })}
      </div>
    </div>
  );
}
