import * as React from "react";
import "./DaysOfWeek.css";

export const DAYS_OF_WEEK = ["", "Mon", "", "Wed", "", "Fri", ""];

const DaysOfWeek = () => (
  <div className="days-of-week-container">
    {DAYS_OF_WEEK.map((dayOfWeek, index) => (
      <div className="day-of-week-container" key={`day-${index}`}>
        <p className="day-of-week-font" data-testid={`day-${index}`}>
          {dayOfWeek}
        </p>
      </div>
    ))}
  </div>
);

export default DaysOfWeek;
