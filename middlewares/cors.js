import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'https://api-node-two-xi.vercel.app',
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:1234'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true)

      if (acceptedOrigins.indexOf(origin) === -1) {
        const msg =
          'The CORS policy for this site does not allow access from the specified Origin.'
        return callback(new Error(msg), false)
      }

      return callback(null, true)
    }
  })
