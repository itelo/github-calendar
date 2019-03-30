import dfns from "date-fns";
import * as R from "ramda";
import { MAX_DAYS_IN_YEAR } from "./defines";

export const getAllDaysBasedInAYear = (year: number) => {
  const today = new Date();
  const yearHelp = dfns.setYear(today, year);
  const maxDateBasedOnYearPassed = dfns.endOfYear(yearHelp);
  const lastDay = dfns.isAfter(maxDateBasedOnYearPassed, today)
    ? today
    : maxDateBasedOnYearPassed;

  const possibleFirstDay = dfns.subDays(lastDay, MAX_DAYS_IN_YEAR);

  const firstDay = findSaturday(possibleFirstDay);

  const rangeDays = dfns.differenceInCalendarDays(lastDay, firstDay);
  const rangeDaysToSubtract = R.reverse(R.range(0, rangeDays));

  return R.map(subtract(lastDay), rangeDaysToSubtract);
};

export const findSaturday = (date: Date) => {
  let count = 0;
  for (;;) {
    if (!dfns.isSaturday(dfns.subDays(date, count))) {
      count++;
    } else {
      break;
    }
  }
  return dfns.subDays(date, count);
};

export const subtract = (date: Date) => (day: number) =>
  dfns.subDays(date, day);
type TreeDays = {
  date: string;
  count: number;
};

export const concat = (treeDays: TreeDays[]) => (day: Date) => {
  const data = R.find(isDayInTreeDays(day), treeDays);
  if (data) {
    return {
      date: day,
      count: data.count
    };
  } else {
    return {
      date: day,
      count: 0
    };
  }
};

export const isDayInTreeDays = (day: Date) => ({ date }: { date: string }) =>
  dfns.isSameDay(new Date(date), day);

export const mergeTreeJsonWithAllDays = (
  allDays: Date[],
  treeDays: TreeDays[]
) => R.map(concat(treeDays), allDays);

export const extractMonthPositionFromData = (
  acc: { month: string; position: number; lastMonthHelper: string }[],
  data: {
    count: number;
    date: Date;
  }[],
  index: number
) => {
  const month = dfns.format(data[0].date, "MMM");

  if (acc.length === 0 || acc[acc.length - 1].lastMonthHelper !== month) {
    acc.push({
      month,
      position: index,
      lastMonthHelper: month
    });
  }
  return acc;
};
