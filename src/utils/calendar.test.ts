import {
  getAllDaysBasedInAYear,
  findSaturday,
  subtract,
  concat,
  isDayInTreeDays,
  mergeTreeJsonWithAllDays
} from "./calendar";
import * as R from "ramda";
import dfns from "date-fns";

const MOCK_TREE_DAYS = [
  {
    date: "2016-10-22",
    count: 10
  },
  {
    date: "2016-10-28",
    count: 22
  }
];

describe("UTILS/CALLENDAR", () => {
  describe("findSaturday", () => {
    test("findSaturday passing Sunday", () => {
      const dayInSunday = dfns.setDay(new Date(), 0);

      expect(dfns.isSunday(dayInSunday)).toBe(true);

      const dayInSaturday = findSaturday(dayInSunday);

      expect(dfns.isSaturday(dayInSaturday)).toBe(true);
    });

    test("findSaturday passing Monday", () => {
      const dayInMonday = dfns.setDay(new Date(), 1);

      expect(dfns.isMonday(dayInMonday)).toBe(true);

      const dayInSaturday = findSaturday(dayInMonday);

      expect(dfns.isSaturday(dayInSaturday)).toBe(true);
    });

    test("findSaturday passing Tuesday", () => {
      const dayInTuesday = dfns.setDay(new Date(), 2);

      expect(dfns.isTuesday(dayInTuesday)).toBe(true);

      const dayInSaturday = findSaturday(dayInTuesday);

      expect(dfns.isSaturday(dayInSaturday)).toBe(true);
    });

    test("findSaturday passing Wednesday", () => {
      const dayInWednesday = dfns.setDay(new Date(), 3);

      expect(dfns.isWednesday(dayInWednesday)).toBe(true);

      const dayInSaturday = findSaturday(dayInWednesday);

      expect(dfns.isSaturday(dayInSaturday)).toBe(true);
    });

    test("findSaturday passing Thursday", () => {
      const dayInThursday = dfns.setDay(new Date(), 4);

      expect(dfns.isThursday(dayInThursday)).toBe(true);

      const dayInSaturday = findSaturday(dayInThursday);

      expect(dfns.isSaturday(dayInSaturday)).toBe(true);
    });

    test("findSaturday passing Friday", () => {
      const dayInFriday = dfns.setDay(new Date(), 5);

      expect(dfns.isFriday(dayInFriday)).toBe(true);

      const dayInSaturday = findSaturday(dayInFriday);

      expect(dfns.isSaturday(dayInSaturday)).toBe(true);
    });

    test("findSaturday passing Saturday", () => {
      const _dayInSaturday = dfns.setDay(new Date(), 6);

      expect(dfns.isSaturday(_dayInSaturday)).toBe(true);

      const dayInSaturday = findSaturday(_dayInSaturday);

      expect(dfns.isSaturday(dayInSaturday)).toBe(true);
    });
  });

  describe("subtract", () => {
    test("subtract passing today and 1", () => {
      const subtractedDate = subtract(new Date())(1);
      const testedSubDay = dfns.subDays(new Date(), 1);
      expect(subtractedDate.toString()).toBe(testedSubDay.toString());
    });

    test("subtract passing today and 10", () => {
      const subtractedDate = subtract(new Date())(10);
      const testedSubDay = dfns.subDays(new Date(), 10);
      expect(subtractedDate.toString()).toBe(testedSubDay.toString());
    });
  });

  describe("isDayInTreeDays", () => {
    test("isDayInTreeDays passing mock tree", () => {
      const dateToCompare = new Date(MOCK_TREE_DAYS[0].date);
      const _isDayInTreeDays = isDayInTreeDays(dateToCompare)(
        MOCK_TREE_DAYS[0]
      );

      expect(_isDayInTreeDays).toBe(true);
    });
  });

  describe("concat", () => {
    test("concat passing mock tree and first item of mock tree", () => {
      const dateToCompare = new Date(MOCK_TREE_DAYS[0].date);
      const concatedData = concat(MOCK_TREE_DAYS)(dateToCompare);

      expect(concatedData.count).toBe(10);
      expect(concatedData.date.toString()).toBe(
        new Date(MOCK_TREE_DAYS[0].date).toString()
      );
    });

    test("concat passing mock tree and today", () => {
      const dateToCompare = new Date();
      const concatedData = concat(MOCK_TREE_DAYS)(dateToCompare);

      expect(concatedData.count).toBe(0);
      expect(concatedData.date.toString()).toBe(
        new Date(dateToCompare).toString()
      );
    });
  });

  describe("mergeTreeJsonWithAllDays", () => {
    test("mergeTreeJsonWithAllDays passing mock alldays and mock tree days", () => {
      const range = R.range(-1, 10);
      const firstDay = MOCK_TREE_DAYS[0].date;
      const mockedAllDays = range.map(r => dfns.addDays(firstDay, r));

      const mergedTree = mergeTreeJsonWithAllDays(
        mockedAllDays,
        MOCK_TREE_DAYS
      );

      const counter = mergedTree.reduce((acc, item) => (acc += item.count), 0);

      expect(counter).toBe(32);
    });
  });

  describe("mergeTreeJsonWithAllDays", () => {
    test("mergeTreeJsonWithAllDays passing mock alldays and mock tree days", () => {
      const range = R.range(-1, 10);
      const firstDay = MOCK_TREE_DAYS[0].date;
      const mockedAllDays = range.map(r => dfns.addDays(firstDay, r));

      const mergedTree = mergeTreeJsonWithAllDays(
        mockedAllDays,
        MOCK_TREE_DAYS
      );

      const counter = mergedTree.reduce((acc, item) => (acc += item.count), 0);

      expect(counter).toBe(32);
    });
  });

  describe("mergeTreeJsonWithAllDays", () => {
    test("mergeTreeJsonWithAllDays passing mock alldays and mock tree days", () => {
      const range = R.range(-1, 10);
      const firstDay = MOCK_TREE_DAYS[0].date;
      const mockedAllDays = range.map(r => dfns.addDays(firstDay, r));

      const mergedTree = mergeTreeJsonWithAllDays(
        mockedAllDays,
        MOCK_TREE_DAYS
      );

      const counter = mergedTree.reduce((acc, item) => (acc += item.count), 0);

      expect(counter).toBe(32);
    });
  });

  describe("getAllDaysBasedInAYear", () => {
    test("getAllDaysBasedInAYear passing this year", () => {
      const thisYear = dfns.getYear(new Date());
      const alldays = getAllDaysBasedInAYear(thisYear);

      expect(alldays).toEqual(expect.arrayContaining([expect.any(Date)]));
    });

    test("getAllDaysBasedInAYear passing 2016", () => {
      const alldays = getAllDaysBasedInAYear(2016);

      expect(alldays).toEqual(expect.arrayContaining([expect.any(Date)]));
    });
  });
});
