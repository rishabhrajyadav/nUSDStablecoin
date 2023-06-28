const hre = require("hardhat");

async function main() {

  const nUSDStableCoin = await hre.ethers.deployContract("nUSDStableCoin");

  await nUSDStableCoin.waitForDeployment();

  console.log("nUSDStablecoin contract deployed to:", nUSDStableCoin.target );
}

// We recommend this pattern to be able to use async/await ever
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


//nUSDStablecoin contract deployed to: 0x828243AF61a8edb0cAEfE0A73385aaFaf4bfe5d6
//SEPOLIA_URL = https://eth-sepolia.g.alchemy.com/v2/wX8fli2cQBW2_PqHvEsZeYEdd-IP6d7A
//SEPOLIA_API_KEY = wX8fli2cQBW2_PqHvEsZeYEdd-IP6d7A
//PRIVATE_KEY = 
