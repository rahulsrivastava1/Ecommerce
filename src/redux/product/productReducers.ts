import {
  FILTER_BY_RATING,
  FILTER_BY_BRANDS,
  SORT_BY_ASCENDING,
  SORT_BY_DESCENDING,
} from "./productConstants";
import {
  Laptop,
  Mouse,
  electronicsHomeProducts,
  electronicsHomeProductsType,
} from "../../assests/products";
import { CartProductType } from "../../components/cart/CartProduct";

export type stateType = {
  products: electronicsHomeProductsType;
  originalProducts: electronicsHomeProductsType;
  cart: CartProductType[];
  [key: string]: any;
  isFilteredByRating: boolean;
  filteredProducts: Laptop[] | Mouse[];
  isFilteredByBrands: boolean;
};

export type actionType = {
  type: string;
  payload: {
    value: number | string;
    category: string;
  };
};

const initialState = {
  products: electronicsHomeProducts,
  originalProducts: electronicsHomeProducts,
  cart: [],
  isFilteredByRating: false,
  filteredProducts: [],
  isFilteredByBrands: false,
} as stateType;

const productReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case FILTER_BY_RATING:
      const { value, category } = action.payload;
      const categoryProducts = state.originalProducts[category];

      if (value === 0) {
        return {
          ...state,
          products: {
            ...state.products,
            [category]: categoryProducts,
          },
          isFilteredByRating: false,
          filteredProducts: [],
        };
      }

      const modifiedArray = categoryProducts.filter((prod) => {
        return prod.rating === value;
      });

      if (modifiedArray.length > 0) {
        return {
          ...state,
          products: {
            ...state.products,
            [category]: modifiedArray,
          },
          isFilteredByRating: true,
          filteredProducts: modifiedArray,
        };
      }
      return state;

    case FILTER_BY_BRANDS:
      const { value: brandValue, category: brandCategory } = action.payload;
      const productsToFilter = state.isFilteredByRating
        ? state.products[brandCategory]
        : state.originalProducts[brandCategory];

      if (brandValue === "") {
        return {
          ...state,
          products: {
            ...state.products,
            [brandCategory]: state.filteredProducts,
          },
          isFilteredByBrands: false,
        };
      }

      const filteredArray = productsToFilter.filter((prod) => {
        return prod.brand === brandValue;
      });

      if (filteredArray.length > 0) {
        return {
          ...state,
          products: {
            ...state.products,
            [brandCategory]: filteredArray,
          },
          isFilteredByBrands: true,
        };
      }
      return state;

    case SORT_BY_ASCENDING:
      return state;
    case SORT_BY_DESCENDING:
      return state;
    default:
      return state;
  }
};

export default productReducer;
