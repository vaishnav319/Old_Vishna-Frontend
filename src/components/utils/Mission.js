import React from "react";

const Mission = (props) => {
  return (
    <div className="lg:max-w-sm rounded overflow-hidden z-10 shadow-lg bg-white md:max-w-lg ">
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="font-semibold text-3xl mb-2">{props.title}</div>
        <p className="text-3xl">{props.icon}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200  p-3 text-lg font-semibold text-gray-700 mr-2 mb-2">
          {props.desc}
        </span>
      </div>
    </div>
  );
};

export default Mission;
