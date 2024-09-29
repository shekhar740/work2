// pages/api/middleware.ts
import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

export interface NextApiRequestWithToken extends NextApiRequest {
  user?: any; // Adjust the type based on your user structure
}

export interface NextApiResponseWithToken extends NextApiResponse {
  // You can add custom response methods here if needed
}

const authenticate = (handler: NextApiHandler) => {
  return async (req: NextApiRequestWithToken, res: NextApiResponseWithToken) => {
    const { cookies } = req;
   const token = cookies.authToken;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      req.user = decoded; // Attach user info to request object
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  };
};

export default authenticate;