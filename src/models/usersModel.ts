import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Must have first name']
  },
  lastName: {
    type: String,
    required: [true, 'Must have last name']
  },
  birthDate: {
    type: Date,
    required: [true, 'Must have birth date']
  },
  city: {
    type: String,
    required: [true, 'Must have a city']
  },
  country: {
    type: String,
    required: [true, 'Must have country']
  },
  email: {
    type: String,
    required: [true, 'Must have an email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Must have a password']
  },
  confirmPassword: {
    type: String,
    required: [true, 'Must have first name']
  },
})

const User = mongoose.model('User', userSchema)

export default User