import React from "react";
import Button from "elements/Button";
import Carousel from "react-elastic-carousel";
import CardTestimoni from "./CardTestimoni";
export default function Testimoni(props) {
  const breakpoints = [
    { width: 640, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
  ];
  return (
    <section className="section-testimoni px-2 sm:px-5  lg:px-16 xl:pb-32 xl:px-32  mb-32">
      <h2 className="text-2xl font-medium mb-8 px-5 float-left">
        Apa kata mereka?
      </h2>
      <Button
        type="link"
        href="/testimoni"
        className="float-right bg-green-50 px-8 py-2 rounded-full mb-3"
      >
        semua testimoni
      </Button>
      <Carousel breakPoints={breakpoints}>
        {props.data.slice(0, 6).map((item, index) => {
          return (
            <CardTestimoni
              name={item.name}
              message={item.message}
              photo={item.photo}
              key={`testimoni-${index}`}
            />
          );
        })}
      </Carousel>
    </section>
  );
}
