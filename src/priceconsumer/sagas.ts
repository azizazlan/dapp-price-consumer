import { ethers } from 'ethers';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_PRICECONSUMER_REQUEST } from './actionTypes';
import PriceConsumerV3 from '../artifacts/contracts/PriceConsumerV3.sol/PriceConsumerV3.json';

function* fetchPriceconsumerSaga(): any {
  yield console.log('Fetch price from Chainlink smart contract');
  const { ethereum } = window;
  if (!ethereum) {
    alert('Please install MetaMask!');
    return;
  }
  const provider = new ethers.providers.Web3Provider(ethereum);
  const contractAddress = '0x2DB9fb4bdC580Fef9F27b541E4BBc68Ea20ba4d8'; // should replace with contract address
  const contract = new ethers.Contract(
    contractAddress,
    PriceConsumerV3.abi,
    provider,
  );

  const response = yield contract.getLatestPrice();
  console.log(response);
}

function* priceconsumerSagas() {
  yield all([takeLatest(FETCH_PRICECONSUMER_REQUEST, fetchPriceconsumerSaga)]);
}

export default priceconsumerSagas;
