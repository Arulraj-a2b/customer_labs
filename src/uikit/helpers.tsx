import { useEffect } from "react";

export type IsEmptyValueType =
  | string
  | number
  | undefined
  | null
  | boolean
  | any;

export const isEmpty = (value: IsEmptyValueType): boolean =>
  value === undefined || value === null || value === "";

export const mouseOut = (ref: any, handleClickOutside: any) => {
    if (typeof Window !== "undefined") {
      document.addEventListener("click", handleClickOutside, true);
    }
    return () => {
      if (ref) {
        if (typeof Window !== "undefined") {
          document.removeEventListener("click", handleClickOutside, true);
        }
      }
    };
};
