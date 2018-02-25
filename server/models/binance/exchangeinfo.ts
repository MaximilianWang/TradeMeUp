import { Serializable } from "../interfaces/serializable";
import { TradePair } from "../tradepair";
import { TradePairRepositoryService } from "../../services/tradepairrepositoryservice";



export class ExchangeInfo implements TradePair, Serializable<ExchangeInfo>{

    exchange: string = null;
    label: string = null;
    rate: number = null;
    targetAsset: string = null;
    baseAsset: string = null;

    constructor() {


    }

    deserialize(input: any): ExchangeInfo {
        this.exchange = TradePairRepositoryService.BINANCE_EXCHANGE_LABEL;
        if (input.hasOwnProperty("symbol")) {
            this.label = input.symbol;
        }

        if (input.hasOwnProperty("baseAsset")) {
            this.baseAsset = input.baseAsset;
        }

        if (input.hasOwnProperty("quoteAsset")) {
            this.targetAsset = input.quoteAsset;
        }

        return this;
    }



    public isValid(): boolean {
        if (!this.label || !this.baseAsset || !this.targetAsset) {
            return false;
        }

        return true;
    }

}
