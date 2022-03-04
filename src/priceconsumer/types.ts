import {
  FETCH_PRICECONSUMER_REQUEST,
  FETCH_PRICECONSUMER_SUCCESS,
  FETCH_PRICECONSUMER_FAILURE,
} from './actionTypes';

export interface Priceconsumer {
  roundId: number;
  price: number;
  startedAt: number;
  timeStamp: number;
  answeredInRound: number;
  decimals: number;
}

export interface PriceconsumerState {
  prices: Priceconsumer[];
  error: string | null;
  pending: boolean;
}

export interface FetchPriceconsumerRequest {
  type: typeof FETCH_PRICECONSUMER_REQUEST;
}

export interface FetchPriceconsumerSuccess {
  type: typeof FETCH_PRICECONSUMER_SUCCESS;
  payload: FetchPriceconsumerSuccessPayload;
}

export interface FetchPriceconsumerSuccessPayload {
  prices: Priceconsumer[];
}

export interface FetchPriceconsumerFailure {
  type: typeof FETCH_PRICECONSUMER_FAILURE;
  payload: FetchPriceconsumerFailurePayload;
}

export interface FetchPriceconsumerFailurePayload {
  error: string;
}

export type PriceconsumerActions =
  | FetchPriceconsumerRequest
  | FetchPriceconsumerFailure
  | FetchPriceconsumerSuccess;
