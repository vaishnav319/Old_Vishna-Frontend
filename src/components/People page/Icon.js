import "./People.css";
import React from "react";
const Icon = (props) => (
  <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
    <div className="max-w-sm">
      <a href="#">
        <img className="rounded-t-lg w-screen" src="professor.jpg" alt="" />
      </a>
    </div>
    <div className="p-5">
      <a href="#">
        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
          William Smith
        </h5>
      </a>
      <p className="font-normal text-gray-700 mb-3">Assistant Professor</p>
    </div>
  </div>
);
export default Icon;
