import React from "react";
import {
  CONTRIBUTIONS_MOST,
  CONTRIBUTIONS_ALOT,
  CONTRIBUTIONS_MODERATE,
  CONTRIBUTIONS_LITTLE
} from "../../utils/defines";
import { getColorClass } from "../../utils/squares";
import "./CalendarCaption.css";

export const allPossibilities = [
  0,
  CONTRIBUTIONS_LITTLE,
  CONTRIBUTIONS_MODERATE,
  CONTRIBUTIONS_ALOT,
  CONTRIBUTIONS_MOST
];

const CalendarCaption = () => {
  return (
    <div
      data-testid="calendar-caption-container"
      className="calendar-caption-container"
    >
      Less
      <div className="calendar-caption-squares-container">
        {allPossibilities.map(possibility => (
          <div
            data-testid={`possibility-${possibility}`}
            key={possibility}
            className={`big-square ${getColorClass(possibility)}`}
          />
        ))}
      </div>
      More
    </div>
  );
};

export default CalendarCaption;
