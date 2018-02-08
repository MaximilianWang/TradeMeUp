import { Serializable } from "../interfaces/serializable";



export class ExchangeInfo implements Serializable<ExchangeInfo>{

    protected symbol: string = null;
    protected baseAsset: string = null;
    protected quoteAsset: string = null;

    constructor() {
        

    }

    deserialize(input: any): ExchangeInfo {
        this.symbol = input.symbol;
        this.baseAsset = input.baseAsset;
        this.quoteAsset = input.quoteAsset;
        return this;
    }



    public isValid(): boolean {
        if (!this.symbol || !this.baseAsset || !this.quoteAsset) {
            return false;
        }
        
        return true;
    }

}
