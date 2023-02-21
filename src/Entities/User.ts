import { IsNotEmpty, IsString, IsEmail, IsStrongPassword, IsDateString } from 'class-validator'
import { v4 } from 'uuid'

export class User {
  public readonly _id: string

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  public password: string

  @IsNotEmpty()
  @IsDateString()
  public birthDate: Date

  @IsNotEmpty()
  @IsString()
  public firstName: string

  @IsNotEmpty()
  @IsString()
  public lastName: string

  @IsNotEmpty()
  @IsString()
  public city: string

  @IsNotEmpty()
  @IsString()
  public country: string

  public passwordChangedAt: Date

  public passwordResetToken: string

  public passwordResetExpires: Date

  constructor (props?: Omit<User, '_id'> | object, _id?: string) {
    Object.assign(this, props)

    if (!_id) {
      this._id = v4()
    }
  }
}
