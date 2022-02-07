# BlockScanDl

Smart contract source code and ABI downloader for block explorers such as Etherscan, BscScan, FTMScan, or those similar to them.

The script retrieves all of the available smart contract source codes and the ABI of the contract into the `./output/<ContractName>` directory.

## Usage

`blockscandl <url>`

Example:
```
$ blockscandl https://etherscan.io/address/0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45                                                                                   
$ ls output/SwapRouter02/
ApproveAndCall.sol      IApproveAndCall.sol      IERC721Enumerable.sol   INonfungiblePositionManager.sol  IPeripheryPaymentsWithFeeExtended.sol  IUniswapV3PoolActions.sol       IUniswapV3SwapCallback.sol  Multicall.sol                PeripheryPayments.sol                 PoolAddress.sol    TransferHelper.sol
BlockTimestamp.sol      IERC165.sol              IERC721Metadata.sol     IOracleSlippage.sol              IPoolInitializer.sol                   IUniswapV3PoolDerivedState.sol  IV2SwapRouter.sol           MulticallExtended.sol        PeripheryPaymentsExtended.sol         SafeCast.sol       UniswapV2Library.sol
BytesLib.sol            IERC20.sol               IERC721Permit.sol       IPeripheryImmutableState.sol     ISelfPermit.sol                        IUniswapV3PoolEvents.sol        IV3SwapRouter.sol           OracleLibrary.sol            PeripheryPaymentsWithFee.sol          SelfPermit.sol     V2SwapRouter.sol
CallbackValidation.sol  IERC20Permit.sol         IImmutableState.sol     IPeripheryPayments.sol           ISwapRouter02.sol                      IUniswapV3PoolImmutables.sol    IWETH9.sol                  OracleSlippage.sol           PeripheryPaymentsWithFeeExtended.sol  SwapRouter02.json  V3SwapRouter.sol
Constants.sol           IERC20PermitAllowed.sol  IMulticall.sol          IPeripheryPaymentsExtended.sol   IUniswapV2Pair.sol                     IUniswapV3PoolOwnerActions.sol  ImmutableState.sol          Path.sol                     PeripheryValidation.sol               SwapRouter02.sol
FullMath.sol            IERC721.sol              IMulticallExtended.sol  IPeripheryPaymentsWithFee.sol    IUniswapV3Pool.sol                     IUniswapV3PoolState.sol         LowGasSafeMath.sol          PeripheryImmutableState.sol  PeripheryValidationExtended.sol       TickMath.sol
```