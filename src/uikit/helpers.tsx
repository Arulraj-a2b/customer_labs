import { IndicatorColor } from "./Indicator/Indicator";

export type IsEmptyValueType =
  | string
  | number
  | undefined
  | null
  | boolean
  | any;

export const isEmpty = (value: IsEmptyValueType): boolean =>
  value === undefined || value === null || value === "";

export const removeUnderScores = (status: string) => {
  if (typeof status === "string") {
    return status.replace(/_/g, " ");
  }
  return "";
};

export const handleColorHelper = (value: string) => {
  let color: IndicatorColor = "grey";
  if (
    value === "first_name" ||
    value === "last_name" ||
    value === "age" ||
    value === "gender"
  ) {
    color = "success";
  } else if (value === "account_name" || value === "city") {
    color = "error";
  } else {
    color = "grey";
  }
  return color;
};
