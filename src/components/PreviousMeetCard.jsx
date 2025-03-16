import React from "react";

const PreviousMeetCard = ({ meetingTopic, date }) => {
  return (
    <div className="col-lg-6 col-md-12 py-2">
      <div className="card previous-meeting__card">
        <div className="meeting-info d-flex flex-column">
          <i className="fa-regular fa-calendar-days" />
          <div className="d-flex flex-column">
            <h4>{meetingTopic}</h4>
            <p>{date}</p>
          </div>
        </div>
        <div className="participants-logo__shortcuts">
          <div className="participants">
            <img src="/images/user1.jpg" />
          </div>
          <div className="participants">
            <img src="/images/user2.jpg" />
          </div>
          <div className="participants">
            <img src="/images/user3.jpg" />
          </div>
          <div className="participants">
            <img src="/images/user4.jpg" />
          </div>
          <div className="participants">
            <img src="/images/user5.jpg" />
          </div>
          <div className="participants">
            <img src="/images/user6.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousMeetCard;
