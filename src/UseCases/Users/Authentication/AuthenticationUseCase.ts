import { IUserRepository } from '../../../Repositories/Interfaces/IUserRepository'
import { IAuthenticationDTO } from './IAuthenticationDTO'
import { AuthError } from '../../../Error/AuthError'
import { JwtPayload, verify } from 'jsonwebtoken'
import { config } from 'dotenv'
config()

interface jwtDecoded {
  _id: string,
  iat: number,
  exp: number
}

export class AuthenticationUseCase {
  private usersRepository: IUserRepository

  constructor (usersRepository: IUserRepository) {
    this.usersRepository = usersRepository
  }

  public async execute (data: IAuthenticationDTO) {
    const { headerAuth } = data
    let token: string
    if (
      headerAuth &&
      headerAuth.startsWith('Bearer')
    ) {
      token = headerAuth.split(' ')[1]
    }
    if (!token) {
      throw new AuthError('! Please log in to get access.')
    }

    const decoded = verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        throw new AuthError('test')
      }
      return decoded
    }) as unknown as jwtDecoded

    const currentUser = await this.usersRepository.findUserById(decoded._id)
    if (!currentUser) {
      throw new AuthError('! The user belonging to this token does no longer exist.')
    }

    const passRecentlyChanged = this.usersRepository.changePasswordAfter(decoded.iat, currentUser.passwordChangedAt)
    if (passRecentlyChanged) {
      throw new AuthError('! User recently changed password! Please log in again.')
    }
    return currentUser
  }
}
