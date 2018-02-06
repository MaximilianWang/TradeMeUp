import { ExchangeAPIService } from "./exchangeapi";
import { TradePair } from "../models/tradepair";


export class BinanceExchangeAPIService implements ExchangeAPIService {

    private static BASE_API_URL: string = "https://api.binance.com";

    getAllTradePairs(): TradePair[] {
        throw new Error("Method not implemented.");
    }
    hi(): string {
        //return "hyo the environment is " + process.env.NODE_ENV;
        var strinvy ="";
        var request = require('request');
        request.get(BinanceExchangeAPIService.BASE_API_URL + "/api/v1/ping",  function (e, r, body) {
            strinvy = body;

        });

        return strinvy;
    }

    
}