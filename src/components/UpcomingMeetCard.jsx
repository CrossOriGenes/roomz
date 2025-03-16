import React, { useState } from "react";

const UpcomingMeetCard = ({ meetingTopic, date, link }) => {
  const [copied, setCopied] = useState(false);
  function pasteLinktoClipboardHandler() {
    navigator.clipboard.writeText(link);
    setCopied((prev) => !prev);
    setTimeout(() => setCopied(false), 5000);
  }

  return (
    <div className="col-lg-6 col-md-12 py-2">
      <div className="card upcoming-meeting__card">
        <div className="meeting-info d-flex flex-column">
          <i className="fa-solid fa-stopwatch" />
          <div className="d-flex flex-column">
            <h4>{meetingTopic}</h4>
            <p>{date}</p>
          </div>
        </div>
        <div className="action-btns">
          <button type="button" className="btn btn-primary btn-sm">
            Start
          </button>
          <button
            type="button"
            className="btn btn-dark btn-sm"
            onClick={pasteLinktoClipboardHandler}
          >
            {copied ? (
              <i
                className="fa-solid fa-check"
                style={{ color: "var(--teal)" }}
              />
            ) : (
              <i className="fa-solid fa-copy" />
            )}
            {copied ? "Copied" : "Copy invitation"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeetCard;
