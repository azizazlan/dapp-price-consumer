# Dapp-price-consumer

![dapp-price-consumer](https://user-images.githubusercontent.com/732071/156796761-65bcc9b6-7a04-4c04-bd4c-ce57f966563c.png)

The DApp is built using [vite](https://vitejs.dev/) and [hardhat](https://hardhat.org/) frameworks. The smart contract uses chainlink's [ AggregatorV2Interface ](https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol) smart contract.

This project was built to test my understanding after reading [this](https://docs.chain.link/docs/consuming-data-feeds/) and my attempt to combine the hardhat project with vite.

## Requirements

- Install and logged into Metamask. Select Kovan network and you account must have some ethers. Record your private key.
- Subscribe to [alchemyapi](https://www.alchemy.com/) to get the endpoint and its API_KEY

## Usage

1. Clone this repo
2. `npm install`
3. Edit the .env file like below:

```sh
KOVAN_URL=https://eth-kovan.alchemyapi.io/v2/<API_KEY>
PRIVATE_KEY=<yourprivatekey>
```

4. Deploy the smart contract (PriceConsumerV3.sol). Run:

```sh
npx hardhat run scripts/deploy.ts --network kovan
```

5. Get the deployed smart contract and add the vite environment variable for the contract address:

```sh
KOVAN_URL=https://eth-kovan.alchemyapi.io/v2/<API_KEY>
PRIVATE_KEY=<yourprivatekey>
VITE_CONTRACT_ADDRESS=<paste_smart_contract_address_here>
```

6. Run the web app (aka "DApp"), do:

```
npm run dev
```

7. Open and go to, for example, http://localhost:3000/
8. Log into metamask and select the Kovan network. You might need to refresh the page.
9. That's it!
