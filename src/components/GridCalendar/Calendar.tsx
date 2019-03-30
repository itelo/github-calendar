import * as React from "react";
import Tooltip from "../Tooltip";
import DaysOfWeek from "./DaysOfWeek";
import "./Calendar.css";
import Months, { MonthData } from "./Months";
import Square from "./Square";
import CalendarTooltipMessage from "./CalendarTooltipMessage";

export type CalendarProps = {
  months: MonthData[];
  days: { date: Date; count: number }[][];
};

function Calendar(props: CalendarProps) {
  return (
    <div className="calendar-container">
      <DaysOfWeek />
      <div className="weeks-rows">
        <Months months={props.months} />
        {props.days.length > 0 &&
          props.days.map((_days, index) => (
            <div key={index} className="column">
              {_days.map(data => (
                <React.Fragment key={data.date.toString()}>
                  <Tooltip
                    message={
                      <CalendarTooltipMessage
                        date={data.date}
                        contribuitions={data.count}
                      />
                    }
                    position="top"
                  >
                    <Square key={data.date.toString()} count={data.count} />
                  </Tooltip>
                </React.Fragment>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Calendar;
