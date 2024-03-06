import { Router } from 'express'
import { FilesController } from '../controllers/files.js'

export const filesRouter = Router()

filesRouter.get('/', FilesController.DownloadCV)
