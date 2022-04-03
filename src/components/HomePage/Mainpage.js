import React from "react";
import Fade from "react-reveal/Fade";
const Mainpage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/back.png)",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-white bg-opacity-25 py-16  text-center text-white">
          <h1 className="text-white text-4xl p-2">
            Welcome to Computer Vision Laboratory
          </h1>
        </div>

        <div className="flex flex-col mt-44 mb-10 justify-end">
          <Fade left>
            <div className="bg-white max-w-xl text-black p-2">
              <p>
                Our brains can make sense of what we see effortlessly. Our
                long-term goal is to emulate this ability to interpret images
                and extract from them information about the world around us.
              </p>
            </div>
          </Fade>
          <Fade left>
            <div className="bg-white bg-opacity-50 max-w-3xl text-black p-2">
              <p>
                More specifically, one important focus of our research is the
                recovery of deformable and articulated 3D shape and motion from
                video sequences.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
