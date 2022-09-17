import express from "express";
import GamesRouter from "./routes/games.routes";
import AdsRouter from "./routes/ads.routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/games", GamesRouter);
app.use("/ads", AdsRouter);

app.listen(3000, () => {
  console.log("app running at port, 3000");
});
