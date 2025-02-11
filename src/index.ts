import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/authRoutes'
import usersRoutes from './routes/usersRoutes'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const port = 3001

app.use('/auth', authRoutes)
app.use('/users', usersRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
