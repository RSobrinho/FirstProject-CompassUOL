import { Schema, model, Document } from 'mongoose'

interface IEventSchema extends Document {
  description: string,
  dateTime: Date
}

const EventSchema = new Schema({
  _id: Schema.Types.Mixed,
  description: String,
  dateTime: Date
}, {
  timestamps: true
  // select: false
})

export default model<IEventSchema>('Event', EventSchema)
