// import { fs } from 'node:fs'
import { FilesModel } from '../model/files.js'

export class FilesController {
  static async DownloadCV (req, res) {
    FilesModel.DownloadCV(req, res)
  }
}
