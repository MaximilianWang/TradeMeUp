import { ExchangeAPIService } from "../services/exchangeapi";
import { BinanceExchangeAPIService } from "../services/binanceexchangeapiservice";

export class ExchangeAPIFactory {

    public static generateService(exchange: string): ExchangeAPIService {

        switch (exchange.toLowerCase()) {
            case "binance": {

                return new BinanceExchangeAPIService();
            }

            default: {
                throw new Error("Unrecognised exchange");
            }
        }

    }

}