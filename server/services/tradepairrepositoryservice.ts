//import * as mongoose from 'mongoose';

import { TradePair } from '../models/tradepair';
import { BaseTradePair, TradePairSchema, TradePairModel } from '../models/tradepairschema';
import { BaseCrudRepositoryService } from './crudrepositoryservice';
import { tradepairsMongoURI } from '../config';
import { Document, Schema, Model, model, Connection } from "mongoose";

export class TradePairRepositoryService extends BaseCrudRepositoryService<TradePairModel> {

    public static BINANCE_EXCHANGE_LABEL = "binance";

    constructor() {
        super(BaseTradePair);
      }

    public async writeTradePair(tradePair: TradePair): Promise<boolean> {

        var mongoose = require("mongoose");
        //await mongoose.connect(tradepairsMongoURI);
        mongoose.Promise = require("bluebird");

// Do some stuff
//var testModel: Model<TradePairModel> = model<TradePairModel>("tradepairs", TradePairSchema);
        let res = true;
        let createRes;
        var db: Connection;
        try {
            var book = new BaseTradePair({
                exchange : "asdfawf"

            });
            db = await mongoose.createConnection(tradepairsMongoURI);
            await db.createCollection("tradepairs");
            var newmodel = db.model<TradePairModel>("tradepairs", TradePairSchema);


            //var mm = new newmodel(tradePair);

            
            //await book.save();
            
            let query = await newmodel.findOne(tradePair).count();
            if (query === 0) {
                await newmodel.create(tradePair);
            }
            

            ///tradePair.exchange = "111";
/*
            await new newmodel(tradePair).save(
                function(err, wh) {
                    console.log("bad");
    
                }
            
        );
*/

          /*      
                , function(err, wh) {
                console.log("bad");

            }
        */
        
          /*
            
            createRes = await new testModel(tradePair).save(
                function(err, wh) {
                    console.log("bad");
    
                }
            
        );
            */
            
        } catch (err) {
            res = false;
        } finally {
            if (db) {
                db.close();    
            }
        }
            
        return res;
        
    }

}