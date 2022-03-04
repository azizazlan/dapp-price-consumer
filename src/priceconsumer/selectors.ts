import { createSelector } from 'reselect';

import { AppState } from '../reducer';

const getPending = (state: AppState) => state.priceconsumer.pending;

const getPrices = (state: AppState) => state.priceconsumer.prices;

const getError = (state: AppState) => state.priceconsumer.error;

export const getPriceconsumerSelector = createSelector(
  getPrices,
  (prices) => prices,
);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending,
);

export const getErrorSelector = createSelector(getError, (error) => error);
