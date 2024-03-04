import { TechModels } from '../model/techs'

export class TechController {
  static async Get(req, res) {
    const techs = await TechModels.Get()

    res.json(techs)
  }
}
