const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const Escrow = await ethers.getContractFactory("Escrow");

  const sellerAddress = process.env.PRIVATE_ADDRESS; // Replace with actual seller address
  const escrow = await Escrow.deploy(sellerAddress, {
    value: ethers.parseEther("0.1"), // v6 syntax
  });

  await escrow.waitForDeployment();
  console.log(`Escrow contract deployed to: ${await escrow.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
