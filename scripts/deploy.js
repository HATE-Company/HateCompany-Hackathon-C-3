const { ethers } = require("hardhat");

async function main() {

  const App = await ethers.getContractFactory("App");
  const appContract = await App.deployed();

  await appContract.deployed();

  console.log(
    `App contract deployed to ${appContract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
