import React from "react";
import Card from "../utils/Card";

const Workshops = () => {
  return (
    <div className="mb-5">
      <h1 className="lg:ml-16 text-5xl lg:mb-5  text-center lg:text-left  ">
        Workshops
      </h1>
      <div className="flex flex-wrap justify-around">
        <div className="m-3">
          <Card />
        </div>
        <div className="m-3">
          <Card />
        </div>
        <div className="m-3">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Workshops;
