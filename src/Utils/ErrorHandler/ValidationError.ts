import { BaseError } from './BaseHandler'

export class ValidationError extends BaseError {
  validationErrorsObject: object
  constructor (validationErrorsObject: object) {
    super(404, 'ValidationError', validationErrorsObject)

    this.opObject = validationErrorsObject
  }
}
