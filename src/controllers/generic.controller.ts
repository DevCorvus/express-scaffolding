import { Request, Response } from 'express';

export const status = async (req: Request, res: Response) => {
  res.sendStatus(200);
};
