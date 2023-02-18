import { BaseError } from './BaseHandler'

export class NotFoundError extends BaseError {
  propertyString: string

  constructor (propertyString: string) {
    super(404, `${propertyString} not found.`)

    this.propertyString = propertyString
  }
}
