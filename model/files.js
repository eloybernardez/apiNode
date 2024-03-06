import fs from 'node:fs'
import { readdir } from 'node:fs/promises'
import path from 'node:path'

export class FilesModel {
  static async findFileInDirectory (directory, fileName) {
    const files = await readdir(directory)

    if (files.length === 0) {
      return null
    }

    for (const file of files) {
      const filePath = path.join(directory, file)

      if (file === fileName) {
        return filePath
      }
    }

    return null
  }

  static async DownloadCV (req, res) {
    try {
      const cvLocation = await this.findFileInDirectory('./static', 'Fullstack-Eloy-Bernardez.pdf')

      if (!cvLocation) {
        return res.status(404).send('CV not found')
      }

      res.setHeader('Content-Disposition', 'attachment; filename="Fullstack-Eloy-Bernardez.pdf"')
      res.setHeader('Content-Type', 'application/pdf')

      const cv = fs.createReadStream(cvLocation)
      cv.pipe(res)
    } catch (error) {
      console.error(error)
      res.status(500).send(error.message)
    }
  }
}
