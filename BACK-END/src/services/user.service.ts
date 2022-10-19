import { AppError } from "../errors/AppError";
import { ICreateAd } from "../interface";
import { PrismaClient } from "@prisma/client";
import { ConvertHourToMinuts } from "../utils/convert-hout-to-minuts";
import { ConvertMinutsToHours } from "../utils/convert-minuts-to-hour";
const prisma = new PrismaClient();

export const CreateAnAdService = async (id: string, adData: ICreateAd) => {
  const createAd = prisma.ad.create({
    data: {
      gameId: id,
      discord: adData.discord,
      hourEnd: ConvertHourToMinuts(adData.hourEnd),
      hourStart: ConvertHourToMinuts(adData.hourStart),
      name: adData.name,
      weekDay: adData.weekDays.join(","),
      yearsPlaying: adData.yearsPlaying,
      useVoiceChannel: adData.useVoiceChannel,
    },
  });

  return createAd;
};

export const ListAnGameService = async (GameID: string) => {
  const gameFind = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDay: true,
      hourStart: true,
      hourEnd: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      discord: true,
    },
    where: { gameId: GameID },
    orderBy: { createdAt: "desc" },
  });

  if (!gameFind) {
    throw new AppError(404, "User not found");
  }
  const ReturnedGameFind = gameFind.map((game) => {
    return {
      ...game,
      weekDay: game.weekDay?.toString().split(","),
      hourEnd: ConvertMinutsToHours(game.hourEnd),
      hourStart: ConvertMinutsToHours(game.hourStart),
    };
  });

  return ReturnedGameFind;
};

export const ListGamesService = async () => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });
  if (!games) {
    throw new AppError(404, "No game registered");
  }
  return games;
};

export const ListAnDiscordService = async (adID: string) => {
  const AdFind = await prisma.ad.findUnique({
    select: {
      discord: true,
    },
    where: { id: adID },
  });

  if (!AdFind) {
    throw new AppError(404, "Ad not found");
  }

  return AdFind;
};
