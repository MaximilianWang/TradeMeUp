import { ExchangeAPIService } from "./exchangeapi";
import { TradePair } from "../models/tradepair";


export class BinanceExchangeAPIService implements ExchangeAPIService {

    private static BASE_API_URL: string = "https://api.binance.com";

    getAllTradePairs(): TradePair[] {
        throw new Error("Method not implemented.");
    }
    async hi(): Promise<string> {
        //return "hyo the environment is " + process.env.NODE_ENV;
        var strinvy = "";
        var rp = require('request-promise');

        /*
        return rp(BinanceExchangeAPIService.BASE_API_URL + "/api/v1/time")
            .then(function (htmlString) {
                return htmlString;
            })
            .catch(function (err) {
                // Crawling failed...
                return "why";
            });

            */


            return rp(BinanceExchangeAPIService.BASE_API_URL + "/api/v1/time");
        //return strinvy;
    }


}