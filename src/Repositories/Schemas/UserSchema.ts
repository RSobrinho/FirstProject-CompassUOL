import { hash, compare } from 'bcrypt'
import { Schema, model, Document } from 'mongoose'

interface IUserSchema extends Document {
  _id: Schema.Types.Mixed,
  firstName: string,
  lastName: string,
  birthDate: Date,
  city: string,
  country: string,
  email: string,
  password: string,
}

const UserSchema = new Schema({
  _id: Schema.Types.Mixed,
  firstName: String,
  lastName: String,
  birthDate: Date,
  city: String,
  country: String,
  email: String,
  password: String
})

// class UserSchemaClass extends Schema {
//   // is to create new methods for the UserSchema
//   private user = new UserSchemaClass({
//     firstName: String,
//     lastName: String,
//     email: String
//   })
//   constructor() {
//     super()
//   }

// }

export default model<IUserSchema>('User', UserSchema)
