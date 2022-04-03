import React from "react";
import Mission from "../utils/Mission";
import { BsJournalBookmark, BsSearch } from "react-icons/bs";
import { BiRocket } from "react-icons/bi";
const MissionsPage = () => {
  return (
    <div>
      <div>
        <h1 className="text-black text-center text-5xl mb-2">Missions</h1>
        <div className="flex lg:flex-row justify-center flex-col items-center">
          <div className="m-3">
            <Mission
              title="Education"
              icon={<BsJournalBookmark />}
              desc="Congrats on your promotion! I cannot wait to see the impact you are going to have on the company as you move up. I cannot wait to see the impact you are going to have on the company as you move up.I cannot wait to see the impact you are going to have on the company as you move up."
            />
          </div>

          <div className="m-3">
            <Mission
              title="Research"
              icon={<BsSearch />}
              desc="Congrats on your promotion! I cannot wait to see the impact you are going to have on the company as you move up.I cannot wait to see the impact you are going to have on the company as you move up.I cannot wait to see the impact you are going to have on the company as you move up."
            />
          </div>

          <div className="m-3">
            <Mission
              title="Innovation"
              icon={<BiRocket />}
              desc="Congrats on your promotion! I cannot wait to see the impact you are going to have on the company as you move up.I cannot wait to see the impact you are going to have on the company as you move up.I cannot wait to see the impact you are going to have on the company as you move up."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionsPage;
