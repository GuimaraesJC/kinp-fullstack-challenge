import express from 'express'
import api from '../utils/axios'
import { authenticateToken } from '../middleware/authMiddleware'

const router = express.Router()

router.get('/', authenticateToken,  async (req, res) => {
  try {
    const response = await api.get('/users')
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' })
  }
})


export default router
