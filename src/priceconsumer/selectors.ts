import { createSelector } from 'reselect';

import { AppState } from '../reducer';
import { Priceconsumer } from './types';

const getPending = (state: AppState) => state.priceconsumer.pending;

const getPrices = (state: AppState) => state.priceconsumer.prices;

const getError = (state: AppState) => state.priceconsumer.error;

export const getPricesSelector = createSelector(
  getPrices,
  (prices: Priceconsumer[]) => prices,
);

export const getPendingSelector = createSelector(
  getPending,
  (pending: boolean) => pending,
);

export const getErrorSelector = createSelector(
  getError,
  (error: string | null) => error,
);
