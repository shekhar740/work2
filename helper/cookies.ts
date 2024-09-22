import { generateToken } from '@/utils/share-code';
import cookie from 'cookie';
import { NextApiResponse } from 'next';

export const setCookie = (res: NextApiResponse, ...args: { [key: string]: any }[]) => {
  // Combine all arguments into a single object
  const payload = Object.assign({}, ...args);

  // Generate the token with the combined payload
  const generatedToken = generateToken(payload);

  // Set the cookie with the generated token
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('authToken', generatedToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
      path: '/',
      sameSite: 'lax', // Prevent CSRF attacks
    })
  );
};
