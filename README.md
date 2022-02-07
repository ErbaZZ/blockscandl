# BlockScanDl

Smart contract source code and ABI downloader for block explorers such as Etherscan, BscScan, FTMScan, or those similar to them.

The script retrieves all of the available smart contract source codes and the ABI of the contract into the `./output/<ContractName>` directory.

## Installation

`npm install blockscandl -g`

## Usage

`blockscandl <url>`

Example:
```
$ blockscandl https://etherscan.io/address/0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45
63 contract and 1 ABI files written to /private/tmp/output/SwapRouter02
$ ls /private/tmp/output/SwapRouter02               
ApproveAndCall.sol       IERC721Metadata.sol                    ISelfPermit.sol                 IWETH9.sol                            PeripheryValidation.sol
BlockTimestamp.sol       IERC721Permit.sol                      ISwapRouter02.sol               ImmutableState.sol                    PeripheryValidationExtended.sol
BytesLib.sol             IImmutableState.sol                    IUniswapV2Pair.sol              LowGasSafeMath.sol                    PoolAddress.sol
CallbackValidation.sol   IMulticall.sol                         IUniswapV3Pool.sol              Multicall.sol                         SafeCast.sol
Constants.sol            IMulticallExtended.sol                 IUniswapV3PoolActions.sol       MulticallExtended.sol                 SelfPermit.sol
FullMath.sol             INonfungiblePositionManager.sol        IUniswapV3PoolDerivedState.sol  OracleLibrary.sol                     SwapRouter02.json
IApproveAndCall.sol      IOracleSlippage.sol                    IUniswapV3PoolEvents.sol        OracleSlippage.sol                    SwapRouter02.sol
IERC165.sol              IPeripheryImmutableState.sol           IUniswapV3PoolImmutables.sol    Path.sol                              TickMath.sol
IERC20.sol               IPeripheryPayments.sol                 IUniswapV3PoolOwnerActions.sol  PeripheryImmutableState.sol           TransferHelper.sol
IERC20Permit.sol         IPeripheryPaymentsExtended.sol         IUniswapV3PoolState.sol         PeripheryPayments.sol                 UniswapV2Library.sol
IERC20PermitAllowed.sol  IPeripheryPaymentsWithFee.sol          IUniswapV3SwapCallback.sol      PeripheryPaymentsExtended.sol         V2SwapRouter.sol
IERC721.sol              IPeripheryPaymentsWithFeeExtended.sol  IV2SwapRouter.sol               PeripheryPaymentsWithFee.sol          V3SwapRouter.sol
IERC721Enumerable.sol    IPoolInitializer.sol                   IV3SwapRouter.sol               PeripheryPaymentsWithFeeExtended.sol
```