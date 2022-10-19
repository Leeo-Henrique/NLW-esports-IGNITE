import { useState, useEffect } from "react";
import { ArrowBendUpLeft, GameController } from "phosphor-react";
import { useParams, useNavigate } from "react-router-dom";
import CardDuo from "../CardDuo";
import api from "../../api";
import { Game } from "../../App";
import "./index.css";
import "animate.css";

export interface Ads {
  id: string;
  name: string;
  weekDay: string[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
  yearsPlaying: number;
  discord: string;
}
export const FindDuo = () => {
  const { gamename } = useParams();
  const [game, setGame] = useState<Game[]>();
  const [ads, setAds] = useState<Ads[]>();
  const navigate = useNavigate();
  useEffect(() => {
    api
      .get("/games")
      .then((res) => {
        setGame(res.data.filter((game: Game) => game.title === gamename));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (game !== undefined) {
      api.get(`/games/${game[0].id}/ads`).then((res) => setAds(res.data));
      console.log(game!);
    }
  }, [game]);

  return (
    <>
      <ArrowBendUpLeft
        size={32}
        className="Arrow"
        onClick={() => {
          navigate("/");
        }}
      />
      {game?.map((gameInfo, index) => {
        return (
          <figure
            key={index}
            className="w-52 my-10 animate__animated animate__backInDown"
          >
            <img
              src={gameInfo.bannerUrl}
              alt={`Game ${gameInfo.title}`}
              className="rounded-lg"
            />
          </figure>
        );
      })}
      <CardDuo Ads={ads} />
    </>
  );
};
