import { readJSON } from '../utils/utils.js'

const projects = readJSON('../projects.json')

export class ProjectModel {
  static async Get () {
    return projects
  }
}
