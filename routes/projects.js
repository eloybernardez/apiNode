import { Router } from 'express'
import { ProjectController } from '../controllers/projects'

export const projectsRouter = Router()

projectsRouter.get('/', ProjectController.Get)
