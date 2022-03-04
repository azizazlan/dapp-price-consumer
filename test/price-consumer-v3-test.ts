import { expect } from 'chai';
import { BigNumber } from 'ethers';
import { ethers } from 'hardhat';
import { PriceConsumerV3 } from '../typechain';

describe('PriceConsumerv3', function () {
  let smartContractInstance: PriceConsumerV3;

  // index data returns by PriceConsumerV3's getLatestPrice function
  const ROUNDID = 0;
  const PRICE = 1;
  const STARTAT = 2;
  const TIMESTAMP = 3;
  const ANSWEREDINROUND = 4;
  const DECIMALS = 5;

  before(async function () {
    const PriceConsumerV3 = await ethers.getContractFactory('PriceConsumerV3');
    smartContractInstance = PriceConsumerV3.attach(
      '0x2DB9fb4bdC580Fef9F27b541E4BBc68Ea20ba4d8', // should replace with contract address
    );
  });

  it('getLatestPrice which should be greater than zero', async function () {
    const result = await smartContractInstance.getLatestPrice();
    expect(result[PRICE].gt(BigNumber.from(0))).to.be.true;
  });

  it('decimals should equal 8', async function () {
    const result = await smartContractInstance.getLatestPrice();
    expect(result[DECIMALS]).equal(8);
  });
});
