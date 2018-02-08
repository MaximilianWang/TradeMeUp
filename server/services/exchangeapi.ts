import { TradePair } from "../models/tradepair";

export interface ExchangeAPIService {

    getAllTradePairs(): Array<TradePair>;

    hi(): Promise<string>; //dummy test


}