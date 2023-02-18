import { Request, Response, NextFunction } from 'express'

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

export const asyncHandler = (fn) => (req: Request, res: Response, next: NextFunction) => Promise.resolve(fn(req, res, next)).catch(next)

export const errorResponse = (err, req: Request, res: Response, next: NextFunction) => {
  const customError = !(err.constructor.name === 'NodeError' || err.constructor.name === 'SyntaxError')

  res.status(err.statusCode || 500).json({
    response: 'Error',
    error: {
      type: customError === false ? 'UnhandledError' : err.constructor.name,
      path: req.path,
      statusCode: err.statusCode || 500,
      message: err.message,
      opObject: err.opObject
    }
  })

  next(err)
}

export const errorLogging = (err, req: Request) => {
  const customError = !(err.constructor.name === 'NodeError' || err.constructor.name === 'SyntaxError')

  console.log('ERROR')
  console.log(`Type: ${customError ? 'UnhandledError' : err.constructor.name}`)
  console.log('Path: ' + req.path)
  console.log(`Status code: ${err.statusCode || 500}`)
  console.log(err.opObject)
  console.log(err.stack)
}
