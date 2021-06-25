// SPDX-License-Identifier: GNUSpaghett;
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SpaghettiCode is ERC20 {
    address private _owner;
    constructor() ERC20("Spaghetti", "NOODS") {
        _owner = msg.sender;
    }
}
