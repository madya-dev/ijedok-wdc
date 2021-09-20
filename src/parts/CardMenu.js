import React from "react";
import Button from "elements/Button";
export default function CardMenu(props) {
  return (
    <Button type="link" href={props.href}>
      <div className="bg-white shadow-md hover:shadow-lg px-4 py-8 rounded-lg flex flex-col items-center h-full card-menu">
        <div className="image-card mb-4">
          <img src={props.image} className="w-full" alt={props.name} />
        </div>
        <h5 className="font-medium text-xl text-center">{props.name}</h5>
      </div>
    </Button>
  );
}
