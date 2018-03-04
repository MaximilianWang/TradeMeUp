import { TradePair } from "../models/tradepair";

export interface CrudRepository {

    writeTradePair(tradePair: TradePair): Promise<boolean>;
    
    getAllTradePairsByExchange(exchange: string): Promise<Array<TradePair>>;

}
