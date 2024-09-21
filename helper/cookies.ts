// lib/cookies.ts
import { generateToken } from '@/utils/share-code';
import cookie from 'cookie';
import { NextApiResponse } from 'next';

export const setCookie = (res: NextApiResponse,email:string,role:string) => {
  const genratedTOken = generateToken(email);
  const encryptedRole = generateToken(role);


  // res.setHeader(
  //   'Set-Cookie',
  //   cookie.serialize('authToken', genratedTOken, {
  //     httpOnly: true, // Prevent JavaScript access
  //     secure: process.env.NODE_ENV === 'production', // Secure cookies in production
  //     maxAge: 60 * 60, // 1 hour
  //     path: '/',
  //   })
  // );
};
