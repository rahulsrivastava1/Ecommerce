import {
  FILTER_BY_RATING,
  FILTER_BY_BRANDS,
  SORT_BY_ORDER,
} from "./productConstants";

export const filterByRating = (val: number, category: string) => {
  return {
    type: FILTER_BY_RATING,
    payload: {
      value: val,
      category: category,
    },
  };
};

export const filterByBrands = (val: string, category: string) => {
  return {
    type: FILTER_BY_BRANDS,
    payload: {
      value: val,
      category: category,
    },
  };
};

export const sortByOrder = (val: string, category: string) => {
  return {
    type: SORT_BY_ORDER,
    payload: {
      value: val,
      category: category,
    },
  };
};
