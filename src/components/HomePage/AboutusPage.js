import React from "react";
import ModalCarousal from "../utils/ModalCarousal";
const AboutusPage = () => {
  return (
    <div>
      <div className=" bg-gray-300 shadow-xl lg:m-10 m-3 rounded-xl">
        <h1 className="text-4xl lg:px-8 pt-4">About Us</h1>
        <p className="items-center pb-10 lg:px-36 p-5 ">
          Our research addresses the theoretical foundations and practical
          applications of computational vision. We are focused on discovering
          and proposing the fundamental principles, algorithms and
          implementations for solving high-level visual perception and cognition
          problems involving computational geometry, automated image and video
          analysis, and visual reasoning.
        </p>
      </div>{" "}
      <div
        style={{
          backgroundImage: "url(/eventss.png)",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-black text-5xl">Current or Future Events</h1>
        <div className="mt-16">
          <ModalCarousal />
        </div>
      </div>
    </div>
  );
};

export default AboutusPage;
