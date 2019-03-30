import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Calendar from "./Calendar";
import * as R from "ramda";
import dfns from "date-fns";
import treeDays from "../../teste_arvore_data.json";
import {
  extractMonthPositionFromData,
  mergeTreeJsonWithAllDays
} from "../../utils/calendar";
// import renderer from 'react-test-renderer';

describe("<Calendar />", () => {
  test("just snapshot", () => {
    const range = R.range(-1, 13);
    const initialDate = new Date("2016-10-20");

    const mockedAllDays = range.map(r => dfns.addDays(initialDate, r));
    const data = mergeTreeJsonWithAllDays(mockedAllDays, treeDays);
    const allDaysSplitted = R.splitEvery(7, data);

    const months = allDaysSplitted.reduce(extractMonthPositionFromData, []);

    const { container } = render(
      <Calendar days={allDaysSplitted} months={months} />
    );

    expect(container).toMatchSnapshot();
  });
});
