const express = require('express')
const cors = require('cors')
// const crypto = require('node:crypto')

const app = express()
app.use(
  cors({
    origin: (origin, callback) => {
      const ALLOWED_ORIGINS = ['http://localhost:3000', 'http://localhost:3001']

      if (!origin) return callback(null, true)

      if (ALLOWED_ORIGINS.indexOf(origin) === -1) {
        const msg =
          'The CORS policy for this site does not allow access from the specified Origin.'
        return callback(new Error(msg), false)
      }

      return callback(null, true)
    }
  })
)
app.disable('x-powered-by')

app.get('/proyectos', (req, res) => {
  res.json([
    { id: 1, nombre: 'Proyecto 1' },
    { id: 2, nombre: 'Proyecto 2' },
    { id: 3, nombre: 'Proyecto 3' }
  ])
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
