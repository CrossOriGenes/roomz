import React from "react";
import { Link } from "react-router-dom";
import { getTime, getDate } from "../helpers/time_date";
import UpcomingMeetCard from "../components/UpcomingMeetCard";

const Dashboard = () => {
  const [hr, min, ampm] = getTime();
  const [day, dd, mm, yyyy] = getDate();

  return (
    <div className="column d-flex mx-0" style={{ minWidth: "100vw" }}>
      <div className="col-lg-1 col-md-4"></div>
      <div
        className="col-lg-11 col-md-8 pe-2"
        style={{
          marginTop: "4rem",
          paddingInline: "6.5rem 1rem",
        }}
      >
        <div className="column container py-4">
          <div className="time-card">
            <video src="images/auth-bg.mp4" autoPlay muted loop />
            <div className="badge text-bg-dark text-warning">
              Upcoming meeting at <span>12:30 PM</span>
            </div>
            <div className="date-block">
              <h1 className="heading">
                {hr}<span id="dots">:</span>{min}
                <em>{ampm}</em>
              </h1>
              <h3>
                {day}, {dd} {mm} {yyyy}
              </h3>
            </div>
          </div>
          <div className="row mt-4 pt-2">
            <div className="col-lg-3 col-md-6 col-sm-12 py-2">
              <div
                className="card meeting-panel-card"
                style={{ background: "#FF742E" }}
              >
                <div className="icon-box">
                  <i className="fa-solid fa-plus" />
                </div>
                <div className="d-flex flex-column redirect-blocks">
                  <h4>New Meeting</h4>
                  <p>Setup a new meeting</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 py-2">
              <div
                className="card meeting-panel-card"
                style={{ background: "#0E78F9" }}
              >
                <div className="icon-box">
                  <i className="fa-regular fa-user-plus" />
                </div>
                <div className="d-flex flex-column redirect-blocks">
                  <h4>Join Meeting</h4>
                  <p>Via invitation link</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 py-2">
              <div
                className="card meeting-panel-card"
                style={{ background: "#830EF9" }}
              >
                <div className="icon-box">
                  <i className="fa-regular fa-calendar" />
                </div>
                <div className="d-flex flex-column redirect-blocks">
                  <h4>Schedule Meeting</h4>
                  <p>Plan your meetings</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 py-2">
              <div
                className="card meeting-panel-card"
                style={{ background: "#F9A90E" }}
              >
                <div className="icon-box">
                  <i className="fa-regular fa-video" />
                </div>
                <div className="d-flex flex-column redirect-blocks">
                  <h4>View Recordings</h4>
                  <p>Meeting recordings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 pt-4 px-0">
            <div className="block-header d-flex justify-content-between align-items-center mx-2 px-2">
              <h3>Today's Upcoming meetings</h3>
              <Link to="upcoming-meetings">See All</Link>
            </div>
            <UpcomingMeetCard
              meetingTopic="Robust frontend using NextJS and Tailwind CSS"
              date="March 12, 2025 - 10:30 AM"
              link="test123"
            />
            <UpcomingMeetCard
              meetingTopic="Dynamic serving using NodeJS"
              date="April 19, 2025 - 05:30 PM"
              link="test456"
            />
            <UpcomingMeetCard
              meetingTopic="React Hooks - A Deep dive"
              date="April 23, 2025 - 12:35 PM"
              link="test789"
            />
            <UpcomingMeetCard
              meetingTopic="SCSS detailed Understanding"
              date="May 23, 2025 - 02:33 PM"
              link="test101112"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
