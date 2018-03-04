import { Request, Response, Router } from "express";
import { TradePairsService } from "../services/tradepairsservice";

const tradepairRouter: Router = Router();


/**
 * Test route
 */
tradepairRouter.get("/hi", async (request: Request, response: Response) => {

  const res = await TradePairsService.syncTradePairs("binance");
  return response.json( {
      res
  });
});


tradepairRouter.use('/getTradePairs', function (req, res, next) {
  //console.log('Request Type:', req.method)
  if (!req.body.exchange) {
    res.status(400).end("Bad param");
  } else {
    next();
  }
  
  //
})


/**
 * Getting 
 */
tradepairRouter.post("/getTradePairs", async (request: Request, response: Response) => {
  console.log("getTradePairs endpoint called");
  //const res = await TradePairsService.syncTradePairs("binance");
  return response.json( {
      "asdf":"asdf"
  });
});


export { tradepairRouter };
