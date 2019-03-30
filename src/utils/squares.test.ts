import { getColorClass } from "./squares";
import {
  CONTRIBUTIONS_MOST,
  CONTRIBUTIONS_ALOT,
  CONTRIBUTIONS_MODERATE,
  CONTRIBUTIONS_LITTLE
} from "./defines";

describe("UTILS/SQUARES", () => {
  test("pass CONTRIBUTIONS_MOST and get color most", () => {
    const className = getColorClass(CONTRIBUTIONS_MOST);
    expect(className).toBe("most");
  });

  test("pass CONTRIBUTIONS_ALOT and get color alot", () => {
    const className = getColorClass(CONTRIBUTIONS_ALOT);
    expect(className).toBe("alot");
  });

  test("pass CONTRIBUTIONS_MODERATE and get color moderate", () => {
    const className = getColorClass(CONTRIBUTIONS_MODERATE);
    expect(className).toBe("moderate");
  });

  test("pass CONTRIBUTIONS_LITTLE and get color little", () => {
    const className = getColorClass(CONTRIBUTIONS_LITTLE);
    expect(className).toBe("little");
  });

  test("pass 0 and get color nothing", () => {
    const className = getColorClass(0);
    expect(className).toBe("nothing");
  });
});
