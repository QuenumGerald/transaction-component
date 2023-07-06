# TransactionList Component Documentation

## Introduction

`TransactionList` is a versatile React component designed to fetch and display the list of token transactions for a specific Ethereum address. It interacts with the Moralis API to fetch the necessary data.

## Functionality

The `TransactionList` component takes two props:

- `apiKey`: This prop takes in the API key provided by Moralis, which authenticates your application's requests.

- `address`: This is the Ethereum address for which the component fetches and displays transactions. 

## Internal Working

On initial render, the component begins by showing a 'Loading...' message. At the same time, it starts fetching data from the Moralis API using the `useEffect` hook. This hook calls the `Moralis.EvmApi.token.getWalletTokenTransfers` method with the `apiKey` and `address` props. 

Once the data is fetched, the component maps over the array of transactions. For each transaction, it creates a new `div` element and displays the following details:

- Token Name
- Value
- Chain
- Transaction Hash
- Token Symbol
- Destination Address Label
- From Address
- To Address
- Possible Spam
- BlockTimestamp
- Token Decimals
- Token Logo
- Token Symbol
- Transaction Index

If there's an error during the fetching process, the error is caught in the `catch` block and logged to the console. After the data is either fetched or an error occurs, the loading state is set to false, and the loading message disappears.

## Usage

To use the `TransactionList` component, you first need to import it:

```jsx
import TransactionList from './TransactionList';
