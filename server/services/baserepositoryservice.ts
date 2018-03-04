import { TradePair } from "../models/tradepair";
import * as mongoose from 'mongoose';
import { CrudRepository } from "./crudrepository";
import { Document, Schema, Model, model, Connection } from "mongoose";

export abstract class BaseRepositoryService<T extends mongoose.Document> implements CrudRepository {

    
    
    protected model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this.model = schemaModel;
    }

    abstract async writeTradePair(tradePair: TradePair): Promise<boolean>;

    abstract async getAllTradePairsByExchange(exchange: string): Promise<TradePair[]>;
    //public abstract async writeTradePair(tradePair: TradePair): Promise<boolean>;
    
    protected async createMongoConnection(connectionURI: string): Promise<Connection> {

        var mongoose = require("mongoose");
        //await mongoose.connect(tradepairsMongoURI);
        mongoose.Promise = require("bluebird");

// Do some stuff
//var testModel: Model<TradePairModel> = model<TradePairModel>("tradepairs", TradePairSchema);
        let res = true;
        let createRes;
        return mongoose.createConnection(connectionURI);

    }

}
