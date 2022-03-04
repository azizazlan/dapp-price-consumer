import {
  FETCH_PRICECONSUMER_FAILURE,
  FETCH_PRICECONSUMER_REQUEST,
  FETCH_PRICECONSUMER_SUCCESS,
} from './actionTypes';
import {
  FetchPriceconsumerFailure,
  FetchPriceconsumerRequest,
  FetchPriceconsumerSuccess,
  FetchPriceconsumerSuccessPayload,
  FetchPriceconsumerFailurePayload,
} from './types';

export const fetchPriceconsumerRequest = (): FetchPriceconsumerRequest => ({
  type: FETCH_PRICECONSUMER_REQUEST,
});

export const fetchPriceconsumerSuccess = (
  payload: FetchPriceconsumerSuccessPayload,
): FetchPriceconsumerSuccess => ({
  type: FETCH_PRICECONSUMER_SUCCESS,
  payload,
});

export const fetchPriceconsumerFailure = (
  payload: FetchPriceconsumerFailurePayload,
): FetchPriceconsumerFailure => ({
  type: FETCH_PRICECONSUMER_FAILURE,
  payload,
});
