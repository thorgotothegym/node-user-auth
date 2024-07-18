import { Router } from 'express'

export const customRouter = () => {
  const userRouter = Router()

  userRouter.post('/login', (req, res) => {
    res.json({ name: 'dummy' })
  })

  return userRouter
}
