import {
  SELECT_TRADE_PAIR, TRADE_PAIR_GET, TRADE_PAIR_GET_FAIL, TRADE_PAIR_GET_SUCCESS, Actions
} from './tradepair.actions';

export interface ITradePair {
  selectedPairId: string;
  selectedPairLabel: string;
  purchaseQuantity: string;
  isFetching: false;
}

export function tradepairReducer(state: ITradePair, action: Actions): ITradePair {

  switch (action.type) {

    case TRADE_PAIR_GET:

      return Object.assign({}, state, {
        isFetching: true
      });

    default:
      return state;
  }
}
