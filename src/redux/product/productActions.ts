import { CartProductType } from "../../components/cart/CartProduct";
import {
  FILTER_BY_RATING,
  FILTER_BY_BRANDS,
  SORT_BY_ORDER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_PRODUCT_QUANTITY,
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

export const addtoCart = (val: CartProductType, category: string) => {
  return {
    type: ADD_TO_CART,
    payload: {
      value: val,
      category: category,
    },
  };
};

export const removeFromCart = (val: string, category: string) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      value: val,
      category: category,
    },
  };
};

export const changeProductQuantity = (
  id: string,
  val: number,
  category: string
) => {
  return {
    type: CHANGE_PRODUCT_QUANTITY,
    payload: {
      id: id,
      value: val,
      category: category,
    },
  };
};
