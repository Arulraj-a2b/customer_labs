export type IsEmptyValueType =
  | string
  | number
  | undefined
  | null
  | boolean
  | any;

export const isEmpty = (value: IsEmptyValueType): boolean =>
  value === undefined || value === null || value === "";
