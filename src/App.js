import React, {useState} from 'react';
import './App.css';
import Web3 from "web3";
import {Contract, ethers} from "ethers";

import {erc20 as erc20ABI} from "./abi"

// Spaghetti ERC20 on Rinkeby
const contractAddress = "0xEA8366Cf49c77725D3eF1986e64FB38d82fdeD53";

function App() {
  console.log("ethereum", window.ethereum);
  const [isConnected, setIsConnected] = useState(false);
  const web3 = new Web3(window.ethereum);
  const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner()
  
  const connectToMetamask = () => {
    console.log(web3);
    window.ethereum.request({ method: 'eth_requestAccounts' });
    setIsConnected(true);
  }

  // bare transaction (transfers ETH)
  const sendIt = (message) => {
    const encodedMessage = Buffer.from(message).toString('hex');
    
    const tx = {
      value: "0x420",
      to: "0x80085BFc72e15a28651cECcD15307d76031F240D",
      from: window.ethereum.selectedAddress,
      data: encodedMessage,
    };
    web3.eth.sendTransaction(tx, result => {
      console.log(result);
    });
  }

  const sendErc20 = async () => {
    const contract = new Contract(contractAddress, erc20ABI, signer);
    await contract.transfer("0x1333756bb3CEC30c8F321A016bd80E8f3dc4a589", 0);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {!isConnected && <button onClick={connectToMetamask}>Connect to Metamask</button>}
        {isConnected && <button onClick={() => sendIt("spaghetti")}>Send it</button>}
        {isConnected && <button onClick={() => sendErc20()}>Send ERC20</button>}
      </header>
    </div>
  );
}

export default App;
