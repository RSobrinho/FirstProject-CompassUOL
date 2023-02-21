import { hash, compare } from 'bcrypt'
import { Schema, model, Document } from 'mongoose'
import { randomBytes, createHash } from 'crypto'

interface IUserSchema extends Document {
  _id: Schema.Types.Mixed,
  firstName: string,
  lastName: string,
  birthDate: Date,
  city: string,
  country: string,
  email: string,
  password: string,
  passwordChangedAt: Date,
  passwordResetToken: string,
  passwordResetExpires: Date,
}

const UserSchema = new Schema({
  _id: Schema.Types.Mixed,
  firstName: String,
  lastName: String,
  birthDate: Date,
  city: String,
  country: String,
  email: String,
  password: String,
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date
})

// UserSchema.methods.createPasswordResetToken = function () {
//   const resetToken = randomBytes(32).toString('hex')

//   this.passwordResetToken = createHash('sha256')
//     .update(resetToken)
//     .digest('hex')

//   console.log({ resetToken }, this.passwordResetToken)

//   this.passwordResetExpires = Date.now() + 10 * 60 * 1000

//   return resetToken
// }

export default model<IUserSchema>('User', UserSchema)
