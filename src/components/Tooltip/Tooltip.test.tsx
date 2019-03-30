import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Tooltip from "./Tooltip";
import "jest-dom/extend-expect";

describe("<Tooltip />", () => {
  test("snapshot hide tooltip", () => {
    const { container } = render(
      <Tooltip message="MessageText" position="top">
        <div />
      </Tooltip>
    );

    expect(container).toMatchSnapshot();
  });

  test("snapshot show tooltip", () => {
    const { container, getByTestId } = render(
      <Tooltip message="MessageText" position="top">
        <div />
      </Tooltip>
    );

    const tooltipTrigger = getByTestId("tooltip-trigger");

    fireEvent.mouseOver(tooltipTrigger);

    expect(container).toMatchSnapshot();
  });

  test("test show hide tooltip", () => {
    const { getByTestId, queryByTestId } = render(
      <Tooltip message="MessageText" position="top">
        <div />
      </Tooltip>
    );

    const tooltip = getByTestId("tooltip");
    const tooltipTrigger = getByTestId("tooltip-trigger");

    expect(tooltip).not.toContainElement(queryByTestId("tooltip-message"));

    fireEvent.mouseOver(tooltipTrigger);

    expect(queryByTestId("tooltip-message")).toContainHTML("MessageText");

    fireEvent.mouseLeave(tooltip);
  });
});
