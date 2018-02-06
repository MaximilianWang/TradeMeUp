import { ExchangeAPIService } from "./exchangeapi";
import { ExchangeAPIFactory } from "../factories/exchangeapifactory";


export class TradePairsService {



    public static handleGetTradePairs(exchange: string):string {
        var service : ExchangeAPIService = ExchangeAPIFactory.generateService(exchange);
        return service.hi();
    }

    
}