import { Request, Response, Router } from "express";
import { TradePairsService } from "../services/tradepairsservice";

const tradepairRouter: Router = Router();

tradepairRouter.get("/hi", (request: Request, response: Response) => {

  response.json( {
      "body" : TradePairsService.handleGetTradePairs("binance")
  });
});

export { tradepairRouter };
