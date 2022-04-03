import React from "react";
import Achievements from "../utils/Achievements";
const AchievementsPage = () => {
  return (
    <div>
      <div className="bg-white bg-opacity-25 pt-5 ">
        <div>
          <h1 className="text-black text-center text-5xl mb-2">Achievements</h1>
          <Achievements
            title="Hackathon"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
          />
          <Achievements
            title="Hackathon"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
          />
          <Achievements
            title="Hackathon"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
          />
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
