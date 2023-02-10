import { Schema, model, Document } from 'mongoose'

interface IEventSchema extends Document {
  description: string,
  dateTime: Date
}

const EventSchema = new Schema({
  description: String,
  dateTime: Date
}, {
  timestamps: true
})

export default model<IEventSchema>('Event', EventSchema)
