import React, { useState } from "react";

const PersonalMeeting = () => {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  function pasteLinktoClipboardHandler(link) {
    navigator.clipboard.writeText(link);
    setCopied((prev) => !prev);
    setTimeout(() => setCopied(false), 5000);
  }

  return (
    <div className="column d-flex mx-0" style={{ minWidth: "100vw" }}>
      <div className="col-lg-2 col-md-4"></div>
      <div className="col-lg-10 col-md-8 pe-2" style={{ marginTop: "4rem" }}>
        <div className="column py-4" id="personal-meeting__page">
          <div className="d-flex justify-content-start align-items-center">
            <h3 className="fw-bold fs-2 text-warning">Personal Meeting Room</h3>
          </div>
          <div
            className="row px-2 pe-3 meeting-room__details"
            style={{ marginTop: "2rem" }}
          >
            <div className="info mt-2 mb-2">
              <h4 className="col-2">Topic:</h4>
              <p className="col-10 fw-semibold fs-4 text-info">
                Robust frontend using NextJS and Tailwind CSS
              </p>
            </div>
            <div className="info mt-2 mb-2">
              <h4 className="col-2">Meeting ID:</h4>
              <p className="col-10">234-298-3743</p>
            </div>
            <div className="info mt-2 mb-2">
              <h4 className="col-2">Passcode:</h4>
              <div className="col-10 passcode-box">
                <input
                  type={!show ? "password" : "text"}
                  className="passcode"
                  readOnly
                  value={"123456789"}
                />
                <span onClick={() => setShow((show) => !show)}>
                  {!show ? "Show" : "Hide"}
                </span>
              </div>
            </div>
            <div className="info mt-2 mb-2">
              <h4 className="col-2">Invite Link:</h4>
              <p className="col-10 invite-link">
                https://roomz.render.app/meeting?roomId=234-298-3743
              </p>
            </div>
          </div>
          <div className="container action-btns">
            <button type="button" className="btn btn-primary btn-sm">
              Start the meeting
            </button>
            <button
              type="button"
              className="btn btn-dark btn-sm"
              onClick={() => pasteLinktoClipboardHandler("abc123")}
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
            <button type="button" className="btn btn-outline-light btn-sm">
              <i className="fa-regular fa-pen-to-square" />
              Edit
            </button>
            <button type="button" className="btn btn-outline-danger btn-sm">
              <i className="fa-regular fa-trash" />
              Delete
            </button>
          </div>
        </div>
        <hr className="seperator" />
        <div className="container create-new-room__section px-2 py-3 mt-2">
          <button type="button" className="btn">
            <i className="fa-solid fa-plus" />
            Create a new room
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalMeeting;
