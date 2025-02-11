import express, { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { users } from '../data/users'

const router = express.Router()
const SECRET = process.env.JWT_SECRET || 'really-secret'

router.post('/signup', async (req: Request, res: Response) => {
  const { name, email, password } = req.body

  if (users.find(user => user.email === email)) {
    res.status(400).json({ error: 'User already exists' })
    return
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword
  }

  users.push(user)

  res.json({
    id: user.id,
    name: user.name,
    email: user.email
  })
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = users.find(user => user.email === email)

  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(401).json({ error: 'Invalid credentials' })
    return
  }

  const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' })
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } })
})


export default router
