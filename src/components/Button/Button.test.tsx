import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Button from "./Button";
import "jest-dom/extend-expect";

describe("<Button />", () => {
  test("test the click in button", () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <Button isActive={false} onClick={handleClick}>
        testing-the-button
      </Button>
    );

    const button = getByTestId("button");

    fireEvent.click(button);

    expect(handleClick).toBeCalledTimes(1);
  });

  test("test the inactive css in button", () => {
    const handleClick = jest.fn();

    const { getByTestId, container } = render(
      <Button isActive={false} onClick={handleClick}>
        testing-the-button
      </Button>
    );

    const button = getByTestId("button");

    expect(button).toHaveClass("filter-button");
    expect(button).not.toHaveClass("selected");
    expect(button).toContainHTML("testing-the-button");

    expect(container).toMatchSnapshot();
  });

  test("test the active css in button", () => {
    const handleClick = jest.fn();

    const { getByTestId, container } = render(
      <Button isActive={true} onClick={handleClick}>
        testing-the-button
      </Button>
    );

    const button = getByTestId("button");

    expect(button).toHaveClass("filter-button");
    expect(button).toHaveClass("selected");
    expect(button).toContainHTML("testing-the-button");

    expect(container).toMatchSnapshot();
  });
});
