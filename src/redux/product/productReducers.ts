import {
  FILTER_BY_RATING,
  FILTER_BY_BRANDS,
  SORT_BY_ORDER,
} from "./productConstants";
import {
  LaptopType,
  MouseType,
  electronicsHomeProducts,
  electronicsHomeProductsType,
} from "../../assests/products";
import { CartProductType } from "../../components/cart/CartProduct";

export type stateType = {
  products: electronicsHomeProductsType;
  originalProducts: electronicsHomeProductsType;
  isFilteredByRating: boolean;
  filteredProductsByRating: LaptopType[] | MouseType[];
  isFilteredByBrands: boolean;
  filteredProductsByBrands: LaptopType[] | MouseType[];
  isSortedByOrder: boolean;
  sortedProductsByOrder: LaptopType[] | MouseType[];
  cart: CartProductType[];
  [key: string]: any;
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
  isFilteredByRating: false,
  filteredProductsByRating: [],
  isFilteredByBrands: false,
  filteredProductsByBrands: [],
  isSortedByOrder: false,
  sortedProductsByOrder: [],
  cart: [],
} as stateType;

const productReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case FILTER_BY_RATING:
      const { value: rating, category: ratingCategory } = action.payload;
      const categoryProducts =
        (state.isFilteredByBrands && state.isSortedByOrder) ||
        state.isSortedByOrder ||
        state.isFilteredByBrands
          ? state.products[ratingCategory]
          : state.originalProducts[ratingCategory];

      if (rating === 0) {
        if (state.isFilteredByBrands) {
          return {
            ...state,
            products: {
              ...state.products,
              [ratingCategory]: state.filteredProductsByBrands,
            },
            isFilteredByRating: false,
            filteredProductsByRating: [],
          };
        } else if (state.isSortedByOrder) {
          return {
            ...state,
            products: {
              ...state.products,
              [ratingCategory]: state.sortedProductsByOrder,
            },
            isFilteredByRating: false,
            filteredProductsByRating: [],
          };
        } else {
          return {
            ...state,
            products: {
              ...state.products,
              [ratingCategory]: categoryProducts,
            },
            filteredProductsByRating: [],
            isFilteredByRating: false,
          };
        }
      }

      const modifiedArray = categoryProducts.filter((prod) => {
        return prod.rating === rating;
      });

      if (modifiedArray.length > 0) {
        return {
          ...state,
          products: {
            ...state.products,
            [ratingCategory]: modifiedArray,
          },
          filteredProductsByRating: modifiedArray,
          isFilteredByRating: true,
        };
      }
      return state;

    case FILTER_BY_BRANDS:
      const { value: brandName, category: brandCategory } = action.payload;
      const productsToFilter =
        (state.isFilteredByRating && state.isSortedByOrder) ||
        state.isSortedByOrder ||
        state.isFilteredByRating
          ? state.products[brandCategory]
          : state.originalProducts[brandCategory];

      if (brandName === "") {
        if (
          state.filteredProductsByRating.length > 0 &&
          state.isFilteredByRating
        ) {
          return {
            ...state,
            products: {
              ...state.products,
              [brandCategory]: state.filteredProductsByRating,
            },
            isFilteredByBrands: false,
          };
        } else {
          return {
            ...state,
            products: {
              ...state.originalProducts,
            },
            filteredProductsByBrands: [],
            isFilteredByBrands: false,
          };
        }
      }

      const filteredArray = productsToFilter.filter((prod) => {
        return prod.brand === brandName;
      });

      if (filteredArray.length > 0) {
        return {
          ...state,
          products: {
            ...state.products,
            [brandCategory]: filteredArray,
          },
          filteredProductsByBrands: filteredArray,
          isFilteredByBrands: true,
        };
      }
      return state;

    case SORT_BY_ORDER:
      const { value: sortOrder, category: sortCategory } = action.payload;
      const productsToSort = state.isFilteredByBrands
        ? state.filteredProductsByBrands
        : state.isFilteredByRating
        ? state.filteredProductsByRating
        : state.products[sortCategory];

      if (sortOrder === "") {
        if (state.isFilteredByRating) {
          return {
            ...state,
            products: {
              ...state.products,
              [sortCategory]: state.filteredProductsByRating,
            },
            isSortedByOrder: false,
          };
        } else if (state.isFilteredByBrands) {
          return {
            ...state,
            products: {
              ...state.products,
              [sortCategory]: state.filteredProductsByBrands,
            },
            isSortedByOrder: false,
          };
        }
        return {
          ...state,
          products: {
            ...state.products,
            [sortCategory]: state.originalProducts[sortCategory],
          },
          isSortedByOrder: false,
        };
      }

      let sortedArray = [...productsToSort];

      switch (sortOrder) {
        case "ascending":
          sortedArray.sort((a, b) => a.price - b.price);
          break;
        case "descending":
          sortedArray.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }

      return {
        ...state,
        products: {
          ...state.products,
          [sortCategory]: sortedArray,
        },
        isSortedByOrder: true,
        sortedProductsByOrder: sortedArray,
      };

    default:
      return state;
  }
};

export default productReducer;
