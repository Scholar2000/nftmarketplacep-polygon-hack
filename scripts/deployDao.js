const hre = require("hardhat");

async function main() {
  const Dao = await hre.ethers.getContractFactory("Dao");
  const dao = await Dao.deploy();

  await dao.deployed();

  console.log(
    "Dao deployed to:", dao.address);
 
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

0x65d0b81af468379E83b7713973eEa025B49a2fb2
