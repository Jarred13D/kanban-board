import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // verify the token exists and add the user data to the request object
  // Get the authoriazation header from the request
  const authHeader = req.headers.authorization;

  if (authHeader) {

    const token = authHeader.split(' ')[1];

    const secretKey = process.env.JWT_SECRET_KEY || '';

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        res.sendStatus(403);
        return;
      }

      if (user) {
        req.user = user as JwtPayload;
        next();
      } else {
        res.sendStatus(403);
      }
    });
  } else {
    res.sendStatus(401);
  }
};
