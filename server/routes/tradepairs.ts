import { Request, Response, Router } from "express";
import { TradePairsService } from "../services/tradepairsservice";

const tradepairRouter: Router = Router();

tradepairRouter.get("/hi", async (request: Request, response: Response) => {

  const res = await TradePairsService.handleGetTradePairs("binance");
  response.json( {
      "body" : res
  });
});

export { tradepairRouter };
