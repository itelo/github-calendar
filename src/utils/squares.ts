import {
  CONTRIBUTIONS_MOST,
  CONTRIBUTIONS_ALOT,
  CONTRIBUTIONS_MODERATE,
  CONTRIBUTIONS_LITTLE
} from "./defines";

export const getColorClass = (count: number) => {
  switch (true) {
    case count >= CONTRIBUTIONS_MOST:
      return "most";
    case count >= CONTRIBUTIONS_ALOT:
      return "alot";
    case count >= CONTRIBUTIONS_MODERATE:
      return "moderate";
    case count >= CONTRIBUTIONS_LITTLE:
      return "little";
    default:
      return "nothing";
  }
};
