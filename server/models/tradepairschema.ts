import { Document, Schema, Model, model} from "mongoose";

export var TradePairSchema: Schema = new Schema({
    lastUpdated : Date,
    exchange : String,
    label : String,
    rate : Number
});

TradePairSchema.pre("save", function(next) {
    if (this.isModified("rate")) {

    }

});