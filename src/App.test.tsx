import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import App from "./App";
import "jest-dom/extend-expect";

describe("<Button />", () => {
  test("snapshot 2019", () => {
    const { getByTestId, container } = render(<App />);

    const button = getByTestId("year-2019");

    fireEvent.click(button);

    expect(container).toMatchSnapshot();
  });

  test("snapshot 2018", () => {
    const { getByTestId, container } = render(<App />);

    const button = getByTestId("year-2018");

    fireEvent.click(button);

    expect(container).toMatchSnapshot();
  });

  test("snapshot 2017", () => {
    const { getByTestId, container } = render(<App />);

    const button = getByTestId("year-2017");

    fireEvent.click(button);

    expect(container).toMatchSnapshot();
  });

  test("snapshot 2016", () => {
    const { getByTestId, container } = render(<App />);

    const button = getByTestId("year-2016");

    fireEvent.click(button);

    expect(container).toMatchSnapshot();
  });

  test("snapshot 2015", () => {
    const { getByTestId, container } = render(<App />);

    const button = getByTestId("year-2015");

    fireEvent.click(button);

    expect(container).toMatchSnapshot();
  });
});
