import { ExchangeAPIService } from "./exchangeapi";
import { TradePair } from "../models/tradepair";
import { BaseTradePair } from "../models/tradepairschema";
import { ExchangeInfoBody } from "../models/binance/exchangeinfobody";


/**
 * Service to 
 * 
 */
export class BinanceExchangeAPIService implements ExchangeAPIService {

    private static BASE_API_URL: string = "https://api.binance.com";
    private static EXCHANGE_INFO_EP: string = BinanceExchangeAPIService.BASE_API_URL + "/api/v1/exchangeInfo";
    private static TIME_EP: string = BinanceExchangeAPIService.BASE_API_URL + "/api/v1/time";
    

    async getAllTradePairs(): Promise<TradePair[]> {
        var rp = require('request-promise');
        let response;
        let parsedBody: ExchangeInfoBody = new ExchangeInfoBody();

        try {
            response = await rp(BinanceExchangeAPIService.EXCHANGE_INFO_EP).then(JSON.parse);
            if(response.hasOwnProperty('symbols')){
                console.log(typeof response);
                parsedBody.deserialize(response);

            }
            console.log(parsedBody);

        } catch (err) {
            console.log(err);
        }


        
        //parsing response
        //for

        


        //tradePairs.push(t1);
        return parsedBody.getSymbols();

    }
    async hi(): Promise<string> {
        var rp = require('request-promise');
        return rp(BinanceExchangeAPIService.BASE_API_URL + "/api/v1/time");
    }


}