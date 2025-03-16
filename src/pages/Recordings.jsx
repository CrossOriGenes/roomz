import React from "react";
import RecordingsCard from "../components/RecordingsCard";

const Recordings = () => {
  return (
    <div className="column d-flex mx-0" style={{ minWidth: "100vw" }}>
      <div className="col-lg-2 col-md-4"></div>
      <div className="col-lg-10 col-md-8 pe-2" style={{ marginTop: "4rem" }}>
        <div className="column py-4">
          <div className="d-flex justify-content-start align-items-center">
            <h3 className="fw-bold fs-2 text-info">Meeting Recordings</h3>
          </div>
          <div className="row px-0 pe-3 mt-2" style={{ marginLeft: "-1.2rem" }}>
            <RecordingsCard
              meetingTopic="Robust frontend using NextJS and Tailwind CSS"
              meetingID="jdfi384hfd"
              date="12/03/2025"
            />
            <RecordingsCard
              meetingTopic="Dynamic serving using NodeJS"
              meetingID="ojd9034jfe"
              date="19/04/2025"
            />
            <RecordingsCard
              meetingTopic="React Hooks - A Deep dive"
              meetingID="kso0239hs"
              date="23/01/2025"
            />
            <RecordingsCard
              meetingTopic="SCSS detailed Understanding"
              meetingID="kns6s4t46er"
              date="23/05/2025"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recordings;
