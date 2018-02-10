import { Serializable } from "../interfaces/serializable";
import { ExchangeInfo } from "./exchangeinfo";



export class ExchangeInfoBody implements Serializable<ExchangeInfoBody>{


    protected symbols: Array<ExchangeInfo> = new Array<ExchangeInfo>();

    constructor() {


    }

    public getSymbols(): Array<ExchangeInfo> {
        return this.symbols;
    }

    deserialize(input: any): ExchangeInfoBody {
        var that = this;
        if (input !== null && input.hasOwnProperty("symbols")) {
            input.symbols.forEach(item => {
                let a = new ExchangeInfo();
                a = a.deserialize(item);
                if (a.isValid()) {
                    that.symbols.push(a);
                }
            });
        }
        
        return this;
    }

    isValid(): boolean {
        return true; //todo add validation later
    }

}
