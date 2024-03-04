import { Router } from 'express'
import { TechController } from '../controllers/techs.js'

export const techsRouter = Router()

techsRouter.get('/', TechController.Get)
