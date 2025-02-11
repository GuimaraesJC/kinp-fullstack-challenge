import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { REALLY_SECRET_TOKEN } from '../constants/jwt'

const SECRET = process.env.JWT_SECRET || REALLY_SECRET_TOKEN

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1]

  if (!token) {
    res.status(401).json({ error: 'Access denied, token missing' })
    return
  }

  try {
    const decoded = jwt.verify(token, SECRET) as { id: number }
    (req as any).user = decoded
    next()
  } catch (error) {
    res.status(403).json({ error: 'Invalid or expired token' })
  }
}
