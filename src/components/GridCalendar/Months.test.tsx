import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Months, { offsetX } from "./Months";
import "jest-dom/extend-expect";

describe("<Months />", () => {
  test("test months passing mocked months", () => {
    const mockMonths = [
      {
        month: "Jan",
        position: 2
      },
      {
        month: "Feb",
        position: 6
      }
    ];
    const { getByTestId, container } = render(<Months months={mockMonths} />);

    mockMonths.forEach((month, index) => {
      const content = getByTestId(`month-${index}`);
      expect(content).toHaveStyle(`left: ${month.position * offsetX}`);
      expect(content).toHaveTextContent(month.month);
    });

    expect(container).toMatchSnapshot();
  });
});
