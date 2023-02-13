import { validate } from 'class-validator'
// import { User } from 'Entities/User'
import { Request, Response, NextFunction } from 'express'
import { User } from '../../../Entities/User'

export class LogInUserValidator {
  public async validator (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { email, password } = req.body
    const error = await validate((new User({ email, password })))

    // Devido a refatoração de MVC pra package by use cases, nao consegui finalizar a mensagem customizada de error, pra cada tipo de error. Não aprendi como passar um objeto, que daí meus problemas sumiriam kkj
    if (error.length > 0) {
      return res.status(400).json({ status: 'LogIn Validation Failed', message: error[0].constraints })
    }
    next()
  }
}
