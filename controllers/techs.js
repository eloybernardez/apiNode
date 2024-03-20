import { TechModels } from '../model/techs.js'

export class TechController {
  static async Get (req, res) {
    try {
      const techs = await TechModels.Get()

      res.status(200).json(techs)
    } catch (error) {
      res.status(500).json({ error: error.toString() })
    }
  }
}
