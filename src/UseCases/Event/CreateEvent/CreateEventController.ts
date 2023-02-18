import { CreateEventUseCase } from './CreateEventUseCase'
import { Request, Response } from 'express'

export class CreateEventController {
  private createEventUseCase: CreateEventUseCase

  constructor (createEventUseCase: CreateEventUseCase) {
    this.createEventUseCase = createEventUseCase
  }

  async handle (req: Request, res: Response): Promise<Response> {
    const { description, dateTime } = req.body

    await this.createEventUseCase.execute({ description, dateTime })
    return res.status(200).json({ status: 'Success', message: 'User created successfully' })
  }
}
