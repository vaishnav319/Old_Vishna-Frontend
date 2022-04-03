import React from "react";
import Mainpage from "./HomePage/Mainpage";
import AchievementsPage from "./HomePage/AchievementsPage";
import AboutusPage from "./HomePage/AboutusPage";
import MissionsPage from "./HomePage/MissionsPage";
import ContactPage from "./HomePage/ContactPage";
const Homepage = () => {
  return (
    <div>
      <Mainpage />
      <div className="text-center">
        <AboutusPage />
      </div>
      <AchievementsPage />
      <div className="bg-white bg-opacity-50 pt-5 ">
        <MissionsPage />
        <ContactPage />
      </div>
    </div>
  );
};

export default Homepage;
