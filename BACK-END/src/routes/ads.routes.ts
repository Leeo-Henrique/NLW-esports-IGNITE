import { Router } from "express";

const AdsRouter = Router();
import { ListAnDiscord } from "../controllers/Server.controller";

AdsRouter.get("/:id/discord", ListAnDiscord);
export default AdsRouter;
