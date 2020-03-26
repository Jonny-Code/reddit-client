import React from "react";
import "./About.css";

export const About: React.FC = () => {
  return (
    <div className="about-container">
      <h4 className="title-about">About Community</h4>
      <h4 className="text-lighter fs-15 font-weight-lighter m-0 pt-5">
        The Ubuntu community on Reddit
      </h4>
      <div className="d-flex pt-2 pr-2">
        <div className="flex-2">
          <h4 className="d-flex align-items-center font-weight-light text-lighter fs-16 m-0">
            139k
          </h4>
          <h6 className="m-0 text-lighter">Members</h6>
        </div>
        <div className="flex-2">
          <h4 className="d-flex align-items-center font-weight-light text-lighter fs-16 m-0">
            348
          </h4>
          <h6 className="m-0 text-lighter">Online</h6>
        </div>
        <div className="flex-1"></div>
      </div>
      <h4 className="text-lighter fs-15 font-weight-lighter m-0 pt-5">
        Created Jan 25, 2008
      </h4>
    </div>
  );
};
