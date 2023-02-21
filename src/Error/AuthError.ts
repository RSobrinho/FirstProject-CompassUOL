import { BaseError } from './BaseError'

export class AuthError extends BaseError {
  propertyString: string

  constructor (propertyString: string) {
    super(401, `Unauthorized ${propertyString}.`)

    this.propertyString = propertyString
  }
}
