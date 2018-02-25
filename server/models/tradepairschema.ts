import { Document, Schema, Model, model } from "mongoose";
import { TradePair } from "./tradepair";

export interface TradePairModel extends TradePair, Document {
    hi(): string;
  }

export var TradePairSchema: Schema = new Schema({
    //_id: Schema.Types.ObjectId,
    //lastUpdated: Date,
    exchange: String,
    label: String,
    rate: Number,
    targetAsset: String,
    baseAsset: String
});

TradePairSchema.pre("save", function (next) {
    if (this.isModified("rate")) {
        //change last updated value
    }
    next();
});

TradePairSchema.methods.hi = function (): string {
    return "gello";
};

export const BaseTradePair: Model<TradePairModel> = model<TradePairModel>("tradepairs", TradePairSchema);