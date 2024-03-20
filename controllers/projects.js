import { ProjectModel } from '../model/projects.js'

export class ProjectController {
  static async Get (req, res) {
    try {
      const projects = await ProjectModel.Get()

      res.status(200).json(projects)
    } catch (error) {
      res.status(500).json({ error: error.toString() })
    }
  }
}
