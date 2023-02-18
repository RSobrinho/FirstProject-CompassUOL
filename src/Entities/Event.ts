import { IsString, IsNotEmpty, IsDateString, IsDefined } from 'class-validator'

export class Event {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public description: string

  @IsNotEmpty()
  @IsDateString()
  public dateTime: Date

  constructor (props?: object) {
    Object.assign(this, props)
  }
}
