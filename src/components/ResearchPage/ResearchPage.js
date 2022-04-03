import React from "react";
import Publications from "./Publications";
import Workshops from "./Workshops";

const ResearchPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/comp.jpg)",
          height: "50vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
      >
        {" "}
        <h1 className="text-white text-5xl font-bold absolute right-0 bottom-0">
          VIShna Research Lab
        </h1>
      </div>
      <div className="flex justify-center flex-row">
        <div className="lg:m-4 m-2 flex lg:flex-row flex-col justify-between ">
          <div className="flex flex-col p-5">
            <h2 className="mb-2 text-3xl lg:text-5xl mb-5">
              Computer Vision and Network Analysis
            </h2>
            <h3 className="">
              {" "}
              Amrita Center for Computational Neuroscience has been instituted
              to comprehend the brain and its neural circuits by devising
              mathematical models. In contrast to other fields in biology,
              mathematical thinking and methodology have become entrenched in
              neuroscience since its very beginning, as witnessed by the
              classical work of Hodgkin and Huxley.
            </h3>
          </div>
          <img src="comp.jpg" className="lg:w-1/4 w-1/2 ml-5" />
        </div>
      </div>
      <div>
        <Publications />
      </div>
      <div>
        <Workshops />
      </div>
    </div>
  );
};

export default ResearchPage;
