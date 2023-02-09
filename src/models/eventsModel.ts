import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'Description field is required']
  },
  dateTime: {
    type: Date,
    required: [true, 'DateTime field is required'],
  },
  createdAt: {
    type: Date,
    required: true
  }
})

const Event = mongoose.model('Event', eventSchema)

export default Event