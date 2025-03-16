import React from "react";

const RecordingsCard = ({ meetingTopic, meetingID, date }) => {
  return (
    <div className="col-lg-6 col-md-12 py-2">
      <div className="card recordings__card">
        <div className="meeting-info d-flex flex-column">
          <i className="fa-regular fa-video" />
          <div className="d-flex flex-column">
            <h4>{meetingTopic}</h4>
          </div>
        </div>
        <div className="recording-details">
          <strong>
            Meeting ID: <span>{meetingID}</span>
          </strong>
          <p>
            Recording-date: <span>{date}</span>
          </p>
        </div>
        <div className="position-relative action-btns">
          <button type="button" className="btn btn-primary btn-sm col-6">
            <i className="fa-solid fa-play" />
            Play
          </button>
          <button type="button" className="btn btn-dark btn-sm col-3">
            <i className="fa-solid fa-download" />
            Download
          </button>
          <button type="button" className="btn btn-outline-light btn-sm col-3">
            <i className="fa-solid fa-up-right-from-square" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordingsCard;
