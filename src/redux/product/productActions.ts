
import {
  FILTER_BY_RATING,
  FILTER_BY_BRANDS,
  SORT_BY_ASCENDING,
  SORT_BY_DESCENDING,
} from "./productConstants";

export const filterByRating = (val:number, category:string) => {
    return {
        type: FILTER_BY_RATING,
        payload: {
            value:val,
            category:category
        }
    }
}

export const filterByBrands = (val:string, category: string) => {
    return {
        type: FILTER_BY_BRANDS,
        payload: {
            value: val,
            category: category
        }
    }
}

export const sortByAscending = (category: string) => {
    return {
        type: SORT_BY_ASCENDING,
        payload: category
    }
}

export const sortByDescending = (category: string) => {
    return {
        type: SORT_BY_DESCENDING,
        payload: category
    }
}