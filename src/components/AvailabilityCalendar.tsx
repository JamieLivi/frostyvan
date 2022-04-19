import React from "react";
import Calendar from "react-calendar";
import "../styles/calendar.scss";
import "react-calendar/dist/Calendar.css";

interface Props {}

const AvailabilityCalendar = (props: Props) => {
  return (
    <div className="Sample">
      <div className="Sample__container">
        <div className="Sample__container__content">
          <Calendar onChange={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;
