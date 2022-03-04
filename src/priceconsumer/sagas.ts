import { ethers } from 'ethers';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_PRICECONSUMER_REQUEST } from './actionTypes';
import PriceConsumerV3 from '../artifacts/contracts/PriceConsumerV3.sol/PriceConsumerV3.json';
import { Priceconsumer } from './types';

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
  const divideBy = Math.pow(10, response[5]);
  let result: Priceconsumer = {
    roundId: ethers.BigNumber.from(response[0].toString())
      .div(divideBy)
      .toNumber(),
    price: ethers.BigNumber.from(response[1].toString())
      .div(divideBy)
      .toNumber(),
    startedAt: ethers.BigNumber.from(response[2].toString()).toNumber(),
    timeStamp: ethers.BigNumber.from(response[3].toString()).toNumber(),
    answeredInRound: ethers.BigNumber.from(response[4].toString())
      .div(divideBy)
      .toNumber(),
    decimals: ethers.BigNumber.from(response[5]).toNumber(),
  };
  console.log(result);
}

function* priceconsumerSagas() {
  yield all([takeLatest(FETCH_PRICECONSUMER_REQUEST, fetchPriceconsumerSaga)]);
}

export default priceconsumerSagas;
