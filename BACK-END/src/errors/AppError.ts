import { Response } from "express";

export class AppError extends Error {
  message: string;
  statusCode: number;

  constructor(StatusCode: number, message: string) {
    super();
    this.statusCode = StatusCode;
    this.message = message;
  }
}
export const HandlerError = (error: AppError, res: Response) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  return res.status(500).json("Internal server error");
};
