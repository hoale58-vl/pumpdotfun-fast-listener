import * as borsh from "@coral-xyz/borsh";

interface PumpFunSwapDataStruct {
    mint: any,
    sol_amount: BigInt,
    token_amount: BigInt,
    is_buy: boolean,
    user_publickey: any,
    timestamp: BigInt,
    virtual_sol_reserves: BigInt,
    virtual_token_reserves: BigInt,
}

// Pump.fun: anchor Self CPI Log / TradeEvent
export const PUMPFUN_SWAP_DATA_STRUCT = borsh.struct<PumpFunSwapDataStruct>([
    borsh.u64("_"),
    borsh.u64("_"), // discriminator
    borsh.publicKey("mint"),
    borsh.u64("sol_amount"),
    borsh.u64("token_amount"),
    borsh.bool("is_buy"),
    borsh.publicKey("user_publickey"),
    borsh.i64("timestamp"),
    borsh.u64("virtual_sol_reserves"),
    borsh.u64("virtual_token_reserves"),
]);

interface PumpFunCreateDataStruct {
    name: string,
    symbol: string,
    uri: string,
    creator: any,
}

// Pump.fun: anchor Self CPI Log / CreateEvent
export const PUMPFUN_CREATE_DATA_STRUCT = borsh.struct<PumpFunCreateDataStruct>([
    borsh.u64("_"), // discriminator
    borsh.str("name"),
    borsh.str("symbol"),
    borsh.str("uri"),
    borsh.publicKey("creator"),
]);