// import { fs } from 'node:fs'
import { FilesModel } from '../model/files.js'

export class FilesController {
  static async DownloadCV (req, res) {
    try {
      FilesModel.DownloadCV(req, res)
    } catch (error) {
      res.status(500).json({ error: error.toString() })
    }
  }
}
