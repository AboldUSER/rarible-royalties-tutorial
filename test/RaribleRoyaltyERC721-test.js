const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('RaribleRoyaltyERC721 Test', () => {

    let royaltyNFT

    before(async () => {
        [deployer, account1] = await ethers.getSigners()

        const RoyaltyNFT = await ethers.getContractFactory("RoyaltyNFT")
        royaltyNFT = await RoyaltyNFT.deploy()

        await royaltyNFT.deployed()
    })

    describe('Mint token and set royalty', async () => {
        it('mint two tokens and set two different royalties', async () => {
            const royalty10Percent = 1000
            const royalty20Percent = 1000

            await royaltyNFT.connect(deployer).mint(account1.address)
            await royaltyNFT.connect(deployer).setRoyalties(0, account1.address, royalty10Percent)
            await royaltyNFT.connect(deployer).mint(account1.address)
            await royaltyNFT.connect(deployer).setRoyalties(1, account1.address, royalty20Percent)

            const token0Royalty = await royaltyNFT.getRaribleV2Royalties(0)
            const token1Royalty = await royaltyNFT.getRaribleV2Royalties(1)

            expect(token0Royalty[0][1]).to.equal(royalty10Percent)
            expect(token1Royalty[0][1]).to.equal(royalty20Percent)
        })
    })
})