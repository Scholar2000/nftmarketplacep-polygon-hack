require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({path:__dirname + '/.env'});
const {API_URL, PRIVATE_KEY} = process.env;

module.exports = {
  
  networks: {
    hardhat: {
      chainId: 1337
    },
   polygon_mumbai: {
      url: process.env.API_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    etherscan: {
      apiKey: process.env.API_KEY,
    }
  
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer : {
        enabled: true,
        runs: 200
      }
    }
  },
  mocha: {
    timeout: 40000
  }

};
