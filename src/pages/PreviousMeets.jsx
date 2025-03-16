import React from "react";
import PreviousMeetCard from "../components/PreviousMeetCard";

const PreviousMeets = () => {
  return (
    <div className="column d-flex mx-0" style={{ minWidth: "100vw" }}>
      <div className="col-lg-2 col-md-4"></div>
      <div className="col-lg-10 col-md-8 pe-2" style={{ marginTop: "4rem" }}>
        <div className="column py-4">
          <div className="d-flex justify-content-start align-items-center">
            <h3 className="fw-bold fs-2 text-warning">Previous meetings</h3>
          </div>
          <div className="row px-0 pe-3 mt-2" style={{ marginLeft: "-1.2rem" }}>
            <PreviousMeetCard
              meetingTopic="Robust frontend using NextJS and Tailwind CSS"
              date="March 12, 2025 - 10:30 AM"
            />
            <PreviousMeetCard
              meetingTopic="Dynamic serving using NodeJS"
              date="April 19, 2025 - 05:30 PM"
            />
            <PreviousMeetCard
              meetingTopic="React Hooks - A Deep dive"
              date="April 23, 2025 - 12:35 PM"
            />
            <PreviousMeetCard
              meetingTopic="SCSS detailed Understanding"
              date="May 23, 2025 - 02:33 PM"
            />
            <PreviousMeetCard
              meetingTopic="Robust frontend using NextJS and Tailwind CSS"
              date="March 12, 2025 - 10:30 AM"
            />
            <PreviousMeetCard
              meetingTopic="Dynamic serving using NodeJS"
              date="April 19, 2025 - 05:30 PM"
            />
            <PreviousMeetCard
              meetingTopic="React Hooks - A Deep dive"
              date="April 23, 2025 - 12:35 PM"
            />
            <PreviousMeetCard
              meetingTopic="SCSS detailed Understanding"
              date="May 23, 2025 - 02:33 PM"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousMeets;
