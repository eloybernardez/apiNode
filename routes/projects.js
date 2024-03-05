import { Router } from 'express'
import { ProjectController } from '../controllers/projects.js'

export const projectsRouter = Router()

projectsRouter.get('/', ProjectController.Get)
