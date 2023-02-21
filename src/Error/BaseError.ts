export class BaseError extends Error {
  statusCode: number

  constructor (statusCode: number, message: string, opObject?: object) {
    super(message)

    Object.setPrototypeOf(this, new.target.prototype)
    this.name = Error.name
    this.statusCode = statusCode
    this.opObject = opObject
    Error.captureStackTrace(this)
  }
}
