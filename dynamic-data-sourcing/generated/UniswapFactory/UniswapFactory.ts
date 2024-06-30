// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class FeeAmountEnabled extends ethereum.Event {
  get params(): FeeAmountEnabled__Params {
    return new FeeAmountEnabled__Params(this);
  }
}

export class FeeAmountEnabled__Params {
  _event: FeeAmountEnabled;

  constructor(event: FeeAmountEnabled) {
    this._event = event;
  }

  get fee(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get tickSpacing(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class OwnerChanged extends ethereum.Event {
  get params(): OwnerChanged__Params {
    return new OwnerChanged__Params(this);
  }
}

export class OwnerChanged__Params {
  _event: OwnerChanged;

  constructor(event: OwnerChanged) {
    this._event = event;
  }

  get oldOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PoolCreated extends ethereum.Event {
  get params(): PoolCreated__Params {
    return new PoolCreated__Params(this);
  }
}

export class PoolCreated__Params {
  _event: PoolCreated;

  constructor(event: PoolCreated) {
    this._event = event;
  }

  get token0(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token1(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get fee(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get tickSpacing(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get pool(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class UniswapFactory__parametersResult {
  value0: Address;
  value1: Address;
  value2: Address;
  value3: i32;
  value4: i32;

  constructor(
    value0: Address,
    value1: Address,
    value2: Address,
    value3: i32,
    value4: i32,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set(
      "value3",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value3)),
    );
    map.set("value4", ethereum.Value.fromI32(this.value4));
    return map;
  }

  getFactory(): Address {
    return this.value0;
  }

  getToken0(): Address {
    return this.value1;
  }

  getToken1(): Address {
    return this.value2;
  }

  getFee(): i32 {
    return this.value3;
  }

  getTickSpacing(): i32 {
    return this.value4;
  }
}

export class UniswapFactory extends ethereum.SmartContract {
  static bind(address: Address): UniswapFactory {
    return new UniswapFactory("UniswapFactory", address);
  }

  createPool(tokenA: Address, tokenB: Address, fee: i32): Address {
    let result = super.call(
      "createPool",
      "createPool(address,address,uint24):(address)",
      [
        ethereum.Value.fromAddress(tokenA),
        ethereum.Value.fromAddress(tokenB),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee)),
      ],
    );

    return result[0].toAddress();
  }

  try_createPool(
    tokenA: Address,
    tokenB: Address,
    fee: i32,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createPool",
      "createPool(address,address,uint24):(address)",
      [
        ethereum.Value.fromAddress(tokenA),
        ethereum.Value.fromAddress(tokenB),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee)),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feeAmountTickSpacing(param0: i32): i32 {
    let result = super.call(
      "feeAmountTickSpacing",
      "feeAmountTickSpacing(uint24):(int24)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))],
    );

    return result[0].toI32();
  }

  try_feeAmountTickSpacing(param0: i32): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "feeAmountTickSpacing",
      "feeAmountTickSpacing(uint24):(int24)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getPool(param0: Address, param1: Address, param2: i32): Address {
    let result = super.call(
      "getPool",
      "getPool(address,address,uint24):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param2)),
      ],
    );

    return result[0].toAddress();
  }

  try_getPool(
    param0: Address,
    param1: Address,
    param2: i32,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getPool",
      "getPool(address,address,uint24):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param2)),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  parameters(): UniswapFactory__parametersResult {
    let result = super.call(
      "parameters",
      "parameters():(address,address,address,uint24,int24)",
      [],
    );

    return new UniswapFactory__parametersResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toI32(),
      result[4].toI32(),
    );
  }

  try_parameters(): ethereum.CallResult<UniswapFactory__parametersResult> {
    let result = super.tryCall(
      "parameters",
      "parameters():(address,address,address,uint24,int24)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new UniswapFactory__parametersResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toI32(),
        value[4].toI32(),
      ),
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreatePoolCall extends ethereum.Call {
  get inputs(): CreatePoolCall__Inputs {
    return new CreatePoolCall__Inputs(this);
  }

  get outputs(): CreatePoolCall__Outputs {
    return new CreatePoolCall__Outputs(this);
  }
}

export class CreatePoolCall__Inputs {
  _call: CreatePoolCall;

  constructor(call: CreatePoolCall) {
    this._call = call;
  }

  get tokenA(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenB(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get fee(): i32 {
    return this._call.inputValues[2].value.toI32();
  }
}

export class CreatePoolCall__Outputs {
  _call: CreatePoolCall;

  constructor(call: CreatePoolCall) {
    this._call = call;
  }

  get pool(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class EnableFeeAmountCall extends ethereum.Call {
  get inputs(): EnableFeeAmountCall__Inputs {
    return new EnableFeeAmountCall__Inputs(this);
  }

  get outputs(): EnableFeeAmountCall__Outputs {
    return new EnableFeeAmountCall__Outputs(this);
  }
}

export class EnableFeeAmountCall__Inputs {
  _call: EnableFeeAmountCall;

  constructor(call: EnableFeeAmountCall) {
    this._call = call;
  }

  get fee(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get tickSpacing(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class EnableFeeAmountCall__Outputs {
  _call: EnableFeeAmountCall;

  constructor(call: EnableFeeAmountCall) {
    this._call = call;
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}
