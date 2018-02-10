import { TradePair } from "../models/tradepair";
import * as mongoose from 'mongoose';

export abstract class BaseCrudRepositoryService<T extends mongoose.Document> {

    protected model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this.model = schemaModel;
    }

    public abstract async writeTradePair(tradePair: TradePair): Promise<boolean>;
}
