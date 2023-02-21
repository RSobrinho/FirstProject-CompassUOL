import { Request, Response, NextFunction } from 'express'
import { AuthenticationUseCase } from './AuthenticationUseCase'
// make classes, and refactor this to remove this link with the repository folder, soon.

export class AuthenticationController {
  private authenticationUseCase: AuthenticationUseCase

  constructor (authenticationUseCase: AuthenticationUseCase) {
    this.authenticationUseCase = authenticationUseCase
  }

  async handle (req: Request, res: Response, next: NextFunction): Promise<void> {
    const headerAuth = req.headers.authorization
    const currentUser = await this.authenticationUseCase.execute({ headerAuth })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    req.user = currentUser

    return next()
  }
}

// exports.restrictTo = (...roles) => {
//   return (req, res, next) => {
//     // roles ['admin', 'lead-guide']. role='user'
//     if (!roles.includes(req.user.role)) {
//       return next(
//         new AuthError('! You do not have permission to perform this action')
//       )
//     }

//     next()
//   }
// }
