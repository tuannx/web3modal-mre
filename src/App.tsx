import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createWeb3Modal, defaultConfig} from '@web3modal/ethers/react'

// 1. Your WalletConnect Cloud project ID
const projectId = '28e14a91201028f94cee88eb9da0a227'

// 2. Set chains
const chain = {
  chainId: 84532,
  name: "Base Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia-explorer.base.org",
  rpcUrl: "https://sepolia.base.org",
}

// 3. Create a metadata object
const metadata = {
  name: 'mre',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [chain],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <w3m-button/>
      </header>
    </div>
  );
}

export default App;
