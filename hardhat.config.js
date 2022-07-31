require("@nomiclabs/hardhat-waffle");

const {private_key} = require("./secrets.json")

module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs:200
      }
    }
  },
  networks: {
    moonbase: {
      url: 'https://rpc.api.moonbase.moonbeam.network',
      chainId: 1287, // (hex: 0x507),
      accounts: [private_key]
    },
  },
}