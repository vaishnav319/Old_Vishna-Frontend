import React from "react";
import JournalCard from "./utils/JournalCard";

const Journals = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl text-center m-5">Journal </h1>
        <div className="flex lg:flex-row justify-around">
          <div className="flex flex-col mt-5 hidden lg:block">
            <a className="p-3" href=".">
              Popular Journals
            </a>
            <hr />
            <a className="p-3" href="#conf">
              Journal Articles
            </a>
            <hr />
            <a className="p-3" href="#">
              Patents
            </a>
            <hr />
            <a className="p-3" href="#">
              Books
            </a>
          </div>
          <div>
            <h4>Journal Articles</h4>
            <JournalCard />
            <JournalCard />
            <JournalCard />
            <JournalCard />
            <JournalCard />
            <JournalCard />
            <JournalCard />
            <h4>Popular Journals</h4>
            <JournalCard />
            <JournalCard />
            <JournalCard />
            <JournalCard />
            <JournalCard />
            <JournalCard />
            <JournalCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journals;
