import { readJSON } from '../utils/utils.js'

const techs = readJSON('../techs.json')

export class TechModels {
  static async Get() {
    return techs
  }
}
