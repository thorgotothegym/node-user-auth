import { Router } from 'express'

export const customRouter = () => {
  const userRouter = Router()

  userRouter.post('/login', (req, res) => {
    res.send('hello user/login')
  })

  return userRouter
}
