import { all, fork } from 'redux-saga/effects';

import priceconsumerSagas from './priceconsumer/sagas';

export default function* rootSaga() {
  yield all([fork(priceconsumerSagas)]);
}
