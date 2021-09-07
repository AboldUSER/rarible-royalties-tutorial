// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./LibPart.sol";interface IRoyaltiesProvider {
    function getRoyalties(address token, uint tokenId) external         returns (LibPart.Part[] memory);
}