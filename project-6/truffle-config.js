const HDWalletProvider = require("truffle-hdwallet-provider");
//TODO: Update key
const infuraKey = "";
//
// const fs = require('fs');
const mnemonic =
  "outer lend try lemon donkey turkey air tornado express height ride unfair";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/${infuraKey}`
        ),
      network_id: 4, // rinkeby's id
      gas: 4500000, // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
      from: "0x5ECE6353Df28c411Fb3B8F1E9AB6A56C6dEc0a4a",
    },
  },
};
