import { TechModels } from '../model/techs.js'

export class TechController {
  static async Get(req, res) {
    const techs = await TechModels.Get()

    res.status(200).json(techs)
  }
}
