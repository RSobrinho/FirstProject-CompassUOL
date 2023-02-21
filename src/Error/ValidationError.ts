import { BaseError } from './BaseError'

export class ValidationError extends BaseError {
  validationErrorsObject: object
  constructor (validationErrorsObject: object) {
    super(400, 'ValidationError', validationErrorsObject)

    this.opObject = validationErrorsObject
  }
}
