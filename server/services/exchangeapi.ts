import { TradePair } from "../models/tradepair";

export interface ExchangeService {

    getAllTradePairs(): Array<TradePair>;

    hi(): string; //dummy test


}