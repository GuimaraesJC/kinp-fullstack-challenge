import express from 'express'
import api from '../utils/axios'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const response = await api.get('/users')
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' })
  }
})


export default router
