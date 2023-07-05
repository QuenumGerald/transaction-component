import React from 'react';
import TransactionList from './TransactionList';


function App() {
  const address = '0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8';  // Replace with the actual BSC address

  return (
    <div className="App">
      <h1>Transaction List</h1>
      <TransactionList address={address} />
    </div>
  );
}

export default App;
