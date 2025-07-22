import express from 'express'
import config from './src/payload.config'
import payload from 'payload'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

const start = async () => {
  await payload.init({
    config,
  })

  app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`)
  })
}

start()
