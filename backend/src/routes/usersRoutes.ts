import express, { Request, Response } from 'express'
import api from '../utils/axios'
import { authenticateToken } from '../middleware/authMiddleware'

const router = express.Router()

router.get('/', authenticateToken, async (req: Request, res: Response) => {
  try {
    const response = await api.get('/users')
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' })
  }
})

router.get('/:userId/albums', authenticateToken, async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const response = await api.get(`/users/${userId}/albums`)
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch albums' })
  }
})


export default router
