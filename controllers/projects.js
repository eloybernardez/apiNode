import { ProjectModel } from '../model/projects.js'

export class ProjectController {
  static async Get (req, res) {
    const projects = await ProjectModel.Get()

    res.status(200).json(projects)
  }
}
