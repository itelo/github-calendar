import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Square from "./Square";
import "jest-dom/extend-expect";
import {
  CONTRIBUTIONS_MOST,
  CONTRIBUTIONS_ALOT,
  CONTRIBUTIONS_MODERATE,
  CONTRIBUTIONS_LITTLE
} from "../../utils/defines";

describe("<Square />", () => {
  test("test square passing CONTRIBUTIONS_MOST, should have class most", () => {
    const { getByTestId, container } = render(
      <Square count={CONTRIBUTIONS_MOST} />
    );
    const square = getByTestId("square-color");

    expect(square).toHaveClass("most");

    expect(container).toMatchSnapshot();
  });

  test("test square passing CONTRIBUTIONS_ALOT, should have class alot", () => {
    const { getByTestId, container } = render(
      <Square count={CONTRIBUTIONS_ALOT} />
    );
    const square = getByTestId("square-color");

    expect(square).toHaveClass("alot");

    expect(container).toMatchSnapshot();
  });

  test("test square passing CONTRIBUTIONS_MODERATE, should have class moderate", () => {
    const { getByTestId, container } = render(
      <Square count={CONTRIBUTIONS_MODERATE} />
    );
    const square = getByTestId("square-color");

    expect(square).toHaveClass("moderate");

    expect(container).toMatchSnapshot();
  });

  test("test square passing CONTRIBUTIONS_LITTLE, should have class little", () => {
    const { getByTestId, container } = render(
      <Square count={CONTRIBUTIONS_LITTLE} />
    );
    const square = getByTestId("square-color");

    expect(square).toHaveClass("little");

    expect(container).toMatchSnapshot();
  });

  test("test square passing 0, should have class nothing", () => {
    const { getByTestId, container } = render(<Square count={0} />);
    const square = getByTestId("square-color");

    expect(square).toHaveClass("nothing");

    expect(container).toMatchSnapshot();
  });
});
