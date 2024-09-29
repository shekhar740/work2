import { generateToken } from '@/utils/share-code';
import cookie from 'cookie';
import { NextApiResponse } from 'next';

export const setCookie = (res: NextApiResponse, ...args: { [key: string]: any }[]) => {
  const { category, id, email, admin, password } = Object.assign({}, ...args);
  const generatedToken = generateToken({ admin, email, password });

  if (admin) {
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
  }

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('authToken', generatedToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
      sameSite: 'lax', // Prevent CSRF attacks
    })
  );
};
