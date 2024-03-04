import express, { json } from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { projectsRouter } from './routes/projects.js'
import { techsRouter } from './routes/techs.js'

const app = express()

// Middlewares
app.use(corsMiddleware())
app.use(json())
app.disable('x-powered-by')

// Endpoints
app.get('/projects', projectsRouter)
app.get('/techs', techsRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
