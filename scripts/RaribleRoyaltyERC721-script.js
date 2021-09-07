const hre = require("hardhat");

async function main() {
  const RoyaltyNFT = await hre.ethers.getContractFactory("RoyaltyNFT");
  const royaltyNFT = await RoyaltyNFT.deploy();

  await royaltyNFT.deployed();

  console.log("RoyaltyNFT deployed to:", royaltyNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });