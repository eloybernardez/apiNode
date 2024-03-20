import { readJSON } from '../utils/utils.js'

const experience = readJSON('../experience.json')

export class ExperienceModel {
  static async Get () {
    return experience
  }
}
