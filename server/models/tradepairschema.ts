import { Document, Schema, Model, model } from "mongoose";
import { TradePair } from "./tradepair";

export var TradePairSchema: Schema = new Schema({
    lastUpdated: Date,
    exchange: String,
    label: String,
    rate: Number
});

TradePairSchema.pre("save", function (next) {
    if (this.isModified("rate")) {
        //change last updated value
    }

});

TradePairSchema.methods.getTradePairLabel = function (): string {
    return (this.label.trim());
};

TradePairSchema.methods.getTradePairLabel = function (): number {
    return (this.rate.trim());
};
export const BaseTradePair: Model<TradePair> = model<TradePair>("BaseTradePair", TradePairSchema);