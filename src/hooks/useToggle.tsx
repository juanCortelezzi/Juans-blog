import { useReducer } from "react";

export const useToggle = (initialValue: boolean = false) =>
  useReducer((previousValue) => !previousValue, initialValue);
