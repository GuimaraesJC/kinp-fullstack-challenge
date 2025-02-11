import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/authRoutes'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const port = 3001

app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
