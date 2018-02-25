import { Document } from "mongoose";

export interface TradePair {
    exchange?: String,
    label?: String,
    rate?: Number,
    targetAsset?: String,
    baseAsset?: String
    
}

