import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'Must have a description']
  },
  dateTime: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  }
})

const Event = mongoose.model('Event', eventSchema)

export default Event