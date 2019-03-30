import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import CalendarCaption, { allPossibilities } from "./CalendarCaption";
import "jest-dom/extend-expect";
import { getColorClass } from "../../utils/squares";

describe("<CalendarCaption />", () => {
  test("test calendar caption using allPossibilities and getColorClass", () => {
    const { getByTestId } = render(<CalendarCaption />);

    allPossibilities.forEach(possibility => {
      const content = getByTestId(`possibility-${possibility}`);
      expect(content).toHaveClass("big-square");
      expect(content).toHaveClass(getColorClass(possibility));
    });

    const container = getByTestId("calendar-caption-container");
    expect(container).toHaveTextContent("LessMore");
  });

  test("just snapshot", () => {
    const { container } = render(<CalendarCaption />);

    expect(container).toMatchSnapshot();
  });
});
