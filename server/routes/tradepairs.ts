import { Request, Response, Router } from "express";
import { TradePairsService } from "../services/tradepairsservice";

const tradepairRouter: Router = Router();

tradepairRouter.get("/hi", async (request: Request, response: Response) => {

  const res = await TradePairsService.syncTradePairs("binance");
  return response.json( {
      res
  });
});

export { tradepairRouter };
