import { ProjectModel } from '../models/project.js'

export class ProjectController {
  static async Get(req, res) {
    const projects = await ProjectModel.Get()

    res.json(projects)
  }
}
