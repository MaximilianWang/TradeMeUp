import { ExchangeAPIService } from "./exchangeapi";
import { TradePair } from "../models/tradepair";
import { BaseTradePair } from "../models/tradepairschema";
import { ExchangeInfoBody } from "../models/binance/exchangeinfobody";


export class BinanceExchangeAPIService implements ExchangeAPIService {

    private static BASE_API_URL: string = "https://api.binance.com";

    async getAllTradePairs(): Promise<TradePair[]> {
        var rp = require('request-promise');
        let tradePairs : Array<TradePair> = new Array<TradePair>();
        let response;
        let parsedBody: ExchangeInfoBody = new ExchangeInfoBody();

        try {
            response = await rp(BinanceExchangeAPIService.BASE_API_URL + "/api/v1/time").then(JSON.parse);
            if(response.hasOwnProperty('symbols')){
                console.log(typeof response);
                parsedBody.deserialize(response);

            }
            console.log(parsedBody);

        } catch (err) {
            console.log(err);
        }

        let t1 : TradePair = new BaseTradePair({
            exchange: "what"
        });
        

        tradePairs.push(t1);
        return tradePairs;

    }
    async hi(): Promise<string> {
        var rp = require('request-promise');
        return rp(BinanceExchangeAPIService.BASE_API_URL + "/api/v1/time");
    }


}