import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
     'https://rinkeby.infura.io/v3/33b9122c98964517af67fc73d6233a44'
  );
  web3 = new Web3(provider);
}

export default web3;
