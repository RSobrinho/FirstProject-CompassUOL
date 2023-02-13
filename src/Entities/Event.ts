import { IsString, IsNotEmpty, IsDateString, IsDefined } from 'class-validator'

export class Event {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  private description: string

  @IsNotEmpty()
  @IsDateString()
  public dateTime: Date

  constructor (props?: object) {
    Object.assign(this, props)
  }
}
