//import * as mongoose from 'mongoose';

import { TradePair } from '../models/tradepair';
import { BaseTradePair, TradePairSchema, TradePairModel } from '../models/tradepairschema';
import { tradepairsMongoURI } from '../config';
import { Document, Schema, Model, model, Connection } from "mongoose";
import { BaseRepositoryService } from './baserepositoryservice';

export class TradePairRepositoryService extends BaseRepositoryService<TradePairModel> {


    public static BINANCE_EXCHANGE_LABEL = "binance";

    constructor() {
        super(BaseTradePair);

      }

    public async writeTradePair(tradePair: TradePair): Promise<boolean> {

        let res = true;
        let createRes;
        var db: Connection;
        try {
            
            db = await this.createMongoConnection(tradepairsMongoURI);
            var model = db.model<TradePairModel>("tradepairs", TradePairSchema);
            //await db.createCollection("tradepairs");
            
            
            let query = await model.findOne(tradePair).count();
            if (query === 0) {
                await model.create(tradePair);
            }
            
        } catch (err) {
            res = false;
        } finally {
            if (db) {
                db.close();    
            }
        }
            
        return res;
        
    }

    public async getAllTradePairsByExchange(exchange: string): Promise<TradePair[]> {

        let res: Array<TradePair>;
        /*
        var db: Connection;
        try {
            db = await mongoose.createConnection(tradepairsMongoURI);
            await db.createCollection("tradepairs");
            
            let query = await this.model.findOne(tradePair).count();
            if (query === 0) {
                await this.model.create(tradePair);
            }
            
        } catch (err) {
            res = false;
        } finally {
            if (db) {
                db.close();    
            }
        }
            */
        return res;
        
        
    }



}