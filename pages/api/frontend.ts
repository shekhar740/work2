// Example API route using the middleware
import { NextApiRequest, NextApiResponse } from 'next';
import authenticate from './middleware';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'Success',user:req?.user });
};

export default authenticate(handler);
