import React from "react";
import { getColorClass } from "../../utils/squares";
import "./Square.css";

const Square = (props: { count: number }) => (
  <div className="square-container">
    <div
      data-testid="square-color"
      className={`square ${getColorClass(props.count)}`}
    />
  </div>
);

export default Square;
