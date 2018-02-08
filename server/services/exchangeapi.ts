import { TradePair } from "../models/tradepair";

export interface ExchangeAPIService {

    getAllTradePairs(): Promise<Array<TradePair>>;

    hi(): Promise<string>; //dummy test


}