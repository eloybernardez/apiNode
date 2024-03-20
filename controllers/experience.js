import { ExperienceModel } from '../model/experience.js'

export class ExperienceController {
  static async GetExperience (req, res) {
    try {
      const experience = await ExperienceModel.Get()

      res.status(200).json(experience)
    } catch (error) {
      res.status(500).json({ error: error.toString() })
    }
  }
}
