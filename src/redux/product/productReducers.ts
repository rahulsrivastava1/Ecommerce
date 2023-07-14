import {
  FILTER_BY_RATING,
  FILTER_BY_BRANDS,
  SORT_BY_ORDER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_PRODUCT_QUANTITY,
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
    value: number | string | CartProductType;
    id?: string;
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

const productReducer = (
  state = initialState,
  action: actionType
): stateType => {
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
        if (state.isFilteredByRating) {
          return {
            ...state,
            products: {
              ...state.products,
              [brandCategory]: state.filteredProductsByRating,
            },
            filteredProductsByBrands: [],
            isFilteredByBrands: false,
          };
        } else if (state.isSortedByOrder) {
          return {
            ...state,
            products: {
              ...state.products,
              [brandCategory]: state.sortedProductsByOrder,
            },
            isFilteredByRating: false,
            filteredProductsByBrands: [],
          };
        } else {
          return {
            ...state,
            products: {
              ...state.products,
              [brandCategory]: productsToFilter,
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
      const productsToSort =
        (state.isFilteredByBrands && state.isFilteredByRating) ||
        state.isFilteredByBrands ||
        state.isFilteredByRating
          ? state.products[sortCategory]
          : state.originalProducts[sortCategory];

      if (sortOrder === "") {
        if (state.isFilteredByBrands) {
          return {
            ...state,
            products: {
              ...state.products,
              [sortCategory]: state.filteredProductsByBrands,
            },
            isSortedByOrder: false,
            sortedProductsByOrder: [],
          };
        } else if (state.isFilteredByRating) {
          return {
            ...state,
            products: {
              ...state.products,
              [sortCategory]: state.filteredProductsByRating,
            },
            isSortedByOrder: false,
            sortedProductsByOrder: [],
          };
        } else {
          return {
            ...state,
            products: {
              ...state.products,
              [sortCategory]: productsToSort,
            },
            isSortedByOrder: false,
            sortedProductsByOrder: [],
          };
        }
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

      if (sortedArray.length > 0) {
        return {
          ...state,
          products: {
            ...state.products,
            [sortCategory]: sortedArray,
          },
          isSortedByOrder: true,
          sortedProductsByOrder: sortedArray,
        };
      }
      return state;

    case ADD_TO_CART:
      const { value: product } = action.payload as { value: CartProductType };

      const isProductInCart = state.cart.some((item) => item.id === product.id);

      if (isProductInCart) {
        return state;
      }

      const updatedCart = [...state.cart, product as CartProductType];

      return {
        ...state,
        cart: updatedCart,
      };

    case REMOVE_FROM_CART:
      const { value: id } = action.payload;
      const modifiedCart = state.cart.filter((product) => product.id !== id);

      return {
        ...state,
        cart: modifiedCart,
      };

    case CHANGE_PRODUCT_QUANTITY:
      const { value: quantity, id: prodId } = action.payload;

      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === prodId ? (c.qty = Number(quantity)) : c.qty
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
