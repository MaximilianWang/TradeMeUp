import { ExchangeService } from "./exchangeapi";
import { TradePair } from "../models/tradepair";


export class BinanceExchangeAPIService implements ExchangeService {
    getAllTradePairs(): TradePair[] {
        throw new Error("Method not implemented.");
    }
    hi(): string {
        return "hyo the environment is " + process.env.NODE_ENV;
    }

    
}