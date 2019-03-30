import * as React from "react";
import dfns from "date-fns";
import "./CalendarTooltipMessage.css";

type CalendarTooltipMessageProps = {
  date: Date;
  contribuitions: number;
};

const CalendarTooltipMessage: React.FunctionComponent<
  CalendarTooltipMessageProps
> = ({ date, contribuitions }) => {
  const formattedDate = `${dfns.format(date, "[on] MMM DD[,] YYYY")}`;

  switch (true) {
    case contribuitions === 0:
      return (
        <p
          data-testid="calendar-tooltip-container"
          className="calendar-tooltip-container"
        >
          <span data-testid="bold-text" className="bold-text">
            No contributions{" "}
          </span>
          {formattedDate}
        </p>
      );
    case contribuitions === 1:
      return (
        <p
          data-testid="calendar-tooltip-container"
          className="calendar-tooltip-container"
        >
          <span data-testid="bold-text" className="bold-text">
            1 contribution{" "}
          </span>
          {formattedDate}
        </p>
      );
    default:
      return (
        <p
          data-testid="calendar-tooltip-container"
          className="calendar-tooltip-container"
        >
          <span data-testid="bold-text" className="bold-text">
            {contribuitions} contributions{" "}
          </span>
          {formattedDate}
        </p>
      );
  }
};

export default CalendarTooltipMessage;
