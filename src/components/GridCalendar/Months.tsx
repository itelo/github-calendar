import * as React from "react";
import "./Months.css";

export type MonthData = {
  month: string;
  position: number;
};

export type MonthsProps = {
  months: MonthData[];
};

export const offsetX = 10;

const Months = (props: MonthsProps) => (
  <React.Fragment>
    {props.months.map(({ month, position }, index) => (
      <div
        key={`month-${index}`}
        data-testid={`month-${index}`}
        className="month-container"
        style={{ left: offsetX * position }}
      >
        <p className="month-font">{month}</p>
      </div>
    ))}
  </React.Fragment>
);

export default Months;
