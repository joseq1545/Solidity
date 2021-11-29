import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.7.3", settings: {} }],
  },
  networks: {
    hardhat: {},
    localhost: {},
    coverage: {
      url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Vz4xnX5fwEoWYsohfEdiCfjlMqkdFJQ0",
      accounts: [
        `0x${"a367f559655f7b0505e49328c5920a67049d9609af280c95d47669b897c69e3e"}`,
      ],
      gasPrice: 8000000000,
    },
  },
};

export default config;
