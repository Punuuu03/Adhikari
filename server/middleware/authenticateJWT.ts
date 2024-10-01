// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.cookies.token; // Assuming you're storing the JWT in cookies
//   if (!token) {
//     return res.sendStatus(403);
//   }
//   jwt.verify(token, process.env.JWT_SECRET || '', (err: any, user: any) => {
//     if (err) {
//       return res.sendStatus(403);
//     }
//     req.user = user;
//     next();
//   });
// };

// export default authenticateJWT;
