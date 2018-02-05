import { Document } from "mongoose";

export interface TradePair extends Document {
    getTradePairLabel() : string;
    getTradePairLastSeenRate() : number;
    
}

