import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import CalendarTooltipMessage from "./CalendarTooltipMessage";
import "jest-dom/extend-expect";
import { CONTRIBUTIONS_MOST } from "../../utils/defines";

describe("<CalendarTooltipMessage />", () => {
  test("test CalendarTooltipMessage passing mocked date and contribuitions=CONTRIBUTIONS_MOST", () => {
    const date = new Date("2016-10-22");
    const contribuitions = CONTRIBUTIONS_MOST;
    const { getByTestId, container } = render(
      <CalendarTooltipMessage date={date} contribuitions={contribuitions} />
    );

    const calendarTooltipcontainer = getByTestId(
      "calendar-tooltip-container"
    );
    expect(calendarTooltipcontainer).toHaveTextContent(
      `${CONTRIBUTIONS_MOST} contributions on Oct 21, 2016`
    );

    expect(container).toMatchSnapshot();
  });

  test("test CalendarTooltipMessage passing mocked date and contribuitions=1", () => {
    const date = new Date("2016-10-22");
    const contribuitions = 1;
    const { getByTestId, container } = render(
      <CalendarTooltipMessage date={date} contribuitions={contribuitions} />
    );

    const calendarTooltipcontainer = getByTestId(
      "calendar-tooltip-container"
    );
    expect(calendarTooltipcontainer).toHaveTextContent(
      `1 contribution on Oct 21, 2016`
    );

    expect(container).toMatchSnapshot();
  });

  test("test CalendarTooltipMessage passing mocked date and contribuitions=0", () => {
    const date = new Date("2016-10-22");
    const contribuitions = 0;
    const { getByTestId, container } = render(
      <CalendarTooltipMessage date={date} contribuitions={contribuitions} />
    );

    const calendarTooltipcontainer = getByTestId(
      "calendar-tooltip-container"
    );
    expect(calendarTooltipcontainer).toHaveTextContent(
      `No contributions on Oct 21, 2016`
    );

    expect(container).toMatchSnapshot();
  });
});
