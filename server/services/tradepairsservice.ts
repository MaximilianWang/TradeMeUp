import { ExchangeAPIService } from "./exchangeapi";
import { ExchangeAPIFactory } from "../factories/exchangeapifactory";


export class TradePairsService {



    public static async handleGetTradePairs(exchange: string): Promise<string> {
        var service : ExchangeAPIService = ExchangeAPIFactory.generateService(exchange);
        let res;
        try {
            res = await service.hi();

        } catch (err) {
            
        }
        return res;
    }

    
}