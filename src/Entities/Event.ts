import { IsString, IsNotEmpty, IsDateString, IsDefined } from 'class-validator'
import { v4 } from 'uuid'

export class Event {
  public readonly _id: string

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public description: string

  @IsNotEmpty()
  @IsDateString()
  public dateTime: Date

  constructor (props?: Omit<Event, '_id'> | object, _id?: string) {
    Object.assign(this, props)

    if (!_id) {
      this._id = v4()
    }
  }
}
