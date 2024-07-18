import express, { json } from 'express'
import { PORT } from './config.js'

import { customRouter } from './routes/user.js'

const app = express()

app.use(json())
app.disable('x-powered-by')

app.use('/user', customRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
