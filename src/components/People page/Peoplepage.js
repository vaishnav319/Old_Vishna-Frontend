import React from "react";
import "./People.css";
import Search from "./search.js";
import Alumni from "./alumni.js";
import vision from "./vision.jpg";
import Icon from "./Icon";

const Peoplepage = () => {
  return (
    <div>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <div className="image">
          <img src={vision} width={900} height={570} />
        </div>
        <div class="rectangle">
          <link
            href="https://fonts.googleapis.com/css?family=Dancing Script"
            rel="stylesheet"
          />
          <div className="text">
            <i>
              It is the supreme art of the learning to awaken joy in creative
              expression and knowledge.
            </i>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <div>
          <div className="flex justify-around flex-col lg:flex-row md:flex-row text-center m-5">
            <h1 className="text-5xl">Brains Behind</h1>
            <Search />
          </div>
          <div className=" flex flex-wrap justify-around">
            <div className="m-5">
              <Icon />
            </div>
            <div className="m-5">
              <Icon />
            </div>
            <div className="m-5">
              <Icon />
            </div>
            <div className="m-5">
              <Icon />
            </div>
            <div className="m-5">
              <Icon />
            </div>
            <div className="m-5">
              <Icon />
            </div>
            <div className="m-5">
              <Icon />
            </div>
            <div className="m-5">
              <Icon />
            </div>
          </div>
        </div>
      </div>
      <h3 className="headerStyle1">Alumni</h3>
      <div>
        <Alumni />
      </div>
    </div>
  );
};

export default Peoplepage;
