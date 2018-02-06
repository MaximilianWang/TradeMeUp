import { TradePair } from "../models/tradepair";

export interface ExchangeAPIService {

    getAllTradePairs(): Array<TradePair>;

    hi(): string; //dummy test


}