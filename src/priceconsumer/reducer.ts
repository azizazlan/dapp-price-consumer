import {
  FETCH_PRICECONSUMER_FAILURE,
  FETCH_PRICECONSUMER_REQUEST,
  FETCH_PRICECONSUMER_SUCCESS,
} from './actionTypes';
import { PriceconsumerActions, PriceconsumerState } from './types';

const initialState: PriceconsumerState = {
  pending: false,
  prices: [],
  error: null,
};

export default (state = initialState, action: PriceconsumerActions) => {
  let updatedPrices = [...state.prices];
  switch (action.type) {
    case FETCH_PRICECONSUMER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PRICECONSUMER_SUCCESS:
      updatedPrices = [...state.prices, action.payload];
      return {
        ...state,
        pending: false,
        prices: updatedPrices,
        error: null,
      };
    case FETCH_PRICECONSUMER_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
        prices: [],
      };
    default:
      return {
        ...state,
      };
  }
};
