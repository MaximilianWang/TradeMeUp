import { ExchangeAPIService } from "./exchangeapi";
import { ExchangeAPIFactory } from "../factories/exchangeapifactory";
import { TradePair } from "../models/tradepair";
import { BaseTradePair } from "../models/tradepairschema";
import { TradePairRepositoryService } from "./tradepairrepositoryservice";


export class TradePairsService {



    public static async handleGetRemoteTradePairs(exchange: string): Promise<Array<TradePair>> {
        var service : ExchangeAPIService = ExchangeAPIFactory.generateService(exchange);
        let res;
        try {
            res = await service.getAllTradePairs();

        } catch (err) {
            console.log(err);
        }
        return res;
    }

    public static async handleGetAllLocalTradePairs(): Promise<Array<TradePair>> {
        let remoteTradePairs;

        return remoteTradePairs;

    }

    public static async syncTradePairs(exchange: string): Promise<boolean> {
        let success = true;
        let remoteTradePairs;
        try {
            //remoteTradePairs = await TradePairsService.handleGetRemoteTradePairs(exchange);

        } catch (err) {
            console.log(err);
        }

        let t1 : TradePair = {
            exchange: "what",
            label: "dawf",
            rate: 0.001,
        };

        let repo: TradePairRepositoryService = new TradePairRepositoryService();
        let b;
        try {
            console.log("a");
            b = await repo.writeTradePair(t1);
            console.log("b");
        } catch (err) {
            success = false;
        }
        

        //comparing to local

        //saving updated changes to local


        return success;
    }

    
}