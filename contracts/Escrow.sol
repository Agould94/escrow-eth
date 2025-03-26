// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Escrow{
    address public buyer;
    address public seller; 
    uint public amount;

    constructor(address _seller) payable{
        buyer = msg.sender;
        seller = _seller;
        amount = msg.value;
    }

    function release() external {
        require(msg.sender == buyer, "Only Buyer Can Release funds");
        payable(seller).transfer(amount);
    }
}