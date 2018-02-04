import { Action } from '@ngrx/store';

export const TRADE_PAIR_GET = '[TRADEPAIR] get tradepair historical info for selected';
export const TRADE_PAIR_GET_SUCCESS = '[TRADEPAIR] tradepair info successfully get';
export const TRADE_PAIR_GET_FAIL = '[TRADEPAIR] error while fetching data';
export const GET_ALL_TRADE_PAIRS = '[TRADEPAIR] get all tradepairs the current user is subscribed to';

export const SELECT_TRADE_PAIR = '[TRADEPAIR] Select pair';

interface ITradePair {
  pairLabel: string;
  exchange: string;
  value: number;
}

/* Trade Pair info Get */
export class TradePairGet implements Action {
  readonly type = TRADE_PAIR_GET;

  constructor(public payload: ITradePair) {}
}

export class TradePairGetSuccess implements Action {
  readonly type = TRADE_PAIR_GET_SUCCESS;

  constructor(public payload: string) {}
}

export class TradePairGetFail implements Action {
  readonly type = TRADE_PAIR_GET_FAIL;

  constructor(public payload: string) {}
}

/* Select Trading pair from binance api component */
export class TradePairSelect implements Action {
  readonly type = SELECT_TRADE_PAIR;

  constructor(public payload: string) {}
}


export type Actions =
  | TradePairGet
  | TradePairGetSuccess
  | TradePairGetFail
  | TradePairSelect;
