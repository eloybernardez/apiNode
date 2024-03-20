import { Router } from 'express'
import { ExperienceController } from '../controllers/experience.js'

export const experienceRouter = Router()

experienceRouter.get('/', ExperienceController.GetExperience)
