import React from "react";
import ResearchCard from "../utils/ResearchCard";

const Publications = () => {
  return (
    <div className="mb-5">
      <div>
        <h1 className="lg:ml-16 text-5xl lg:mb-5  text-center lg:text-left  ">
          Publications
        </h1>
        <div className="flex flex-wrap justify-around ">
          <div className="m-3">
            <ResearchCard
              title="A Multimodal Approach"
              description="A Multimodal Approach for Extracting Content Descriptive Metadata from Lecture Videos"
            />
          </div>
          <div className="m-3">
            <ResearchCard
              title="A Multimodal Approach"
              description="A Multimodal Approach for Extracting Content Descriptive Metadata from Lecture Videos"
            />
          </div>
          <div className="m-3">
            <ResearchCard
              title="A Multimodal Approach"
              description="A Multimodal Approach for Extracting Content Descriptive Metadata from Lecture Videos"
            />
          </div>
          <div className="m-3">
            <ResearchCard
              title="A Multimodal Approach"
              description="A Multimodal Approach for Extracting Content Descriptive Metadata from Lecture Videos"
            />
          </div>
          <div className="m-3">
            <ResearchCard
              title="A Multimodal Approach"
              description="A Multimodal Approach for Extracting Content Descriptive Metadata from Lecture Videos"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
