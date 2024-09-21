// pages/api/protected-route.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import authenticate from './middleware';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Your protected route logic here
  res.status(200).json({ message: 'This is a protected route' });
};

export default authenticate(handler);
