import { NextApiRequest, NextApiResponse } from "next";

export const sendErrorResponse = (
  res: NextApiResponse,
  status: number,
  message: string
) => {
  return res.status(status).json({ message });
};