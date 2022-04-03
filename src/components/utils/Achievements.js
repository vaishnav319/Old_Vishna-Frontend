import React from "react";

const Achievements = (props) => {
  return (
    <div className="flex justify-center flex-row">
      <div className="m-1.5 flex lg:flex-row flex-col justify-between max-w-5xl shadow-2xl">
        <div className="flex flex-col p-5">
          <h3 className="text-3xl font-semibold">{props.title}</h3>
          <p>{props.desc}</p>
        </div>
        <img src="events.jpg" className="lg:w-1/4 w-1/2 ml-5" />
      </div>
    </div>
  );
};

export default Achievements;
