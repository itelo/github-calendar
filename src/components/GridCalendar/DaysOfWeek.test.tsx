import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import DaysOfWeek, { DAYS_OF_WEEK } from "./DaysOfWeek";
import "jest-dom/extend-expect";

describe("<DaysOfWeek />", () => {
  test("test months passing mocked months", () => {
    const { getByTestId, container } = render(<DaysOfWeek />);

    DAYS_OF_WEEK.forEach((day, index) => {
      const content = getByTestId(`day-${index}`);
      expect(content).toHaveTextContent(day);
    });

    expect(container).toMatchSnapshot();
  });
});
