import { Request, Response } from "express";
import { HandlerError } from "../errors/AppError";
import { ICreateAd } from "../interface";
import {
  CreateAnAdService,
  ListAnGameService,
  ListGamesService,
  ListAnDiscordService,
} from "../services/user.service";

export const CreateAnAds = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const {
      name,
      hourEnd,
      hourStart,
      useVoiceChannel,
      weekDays,
      yearsPlaying,
      discord,
    }: ICreateAd = req.body;

    const newUser = await CreateAnAdService(id, {
      name,
      hourEnd,
      hourStart,
      useVoiceChannel,
      weekDays,
      yearsPlaying,
      discord,
    });

    return res.status(201).json(newUser);
  } catch (error: any) {
    HandlerError(error, res);
  }
};

export const GetAnGame = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const findedUser = await ListAnGameService(id);

    return res.status(200).json(findedUser);
  } catch (error: any) {
    HandlerError(error, res);
  }
};

export const GetGames = async (req: Request, res: Response) => {
  try {
    const games = await ListGamesService();
    return res.status(200).json(games);
  } catch (error: any) {
    HandlerError(error, res);
  }
};

export const ListAnDiscord = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const Discord = await ListAnDiscordService(id);
    return res.status(200).json(Discord);
  } catch (error: any) {
    HandlerError(error, res);
  }
};
