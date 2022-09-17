import { Router } from "express";

const GamesRouter = Router();
import {
  CreateAnAds,
  GetAnGame,
  GetGames,
} from "../controllers/Server.controller";

GamesRouter.post("/:id/ads", CreateAnAds);
GamesRouter.get("", GetGames);
GamesRouter.get("/:id/ads", GetAnGame);
export default GamesRouter;
