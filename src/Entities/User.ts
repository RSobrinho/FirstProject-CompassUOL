import { IsNotEmpty, IsString, IsEmail, IsStrongPassword, IsDateString } from 'class-validator'

export class User {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  public password: string

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  public confirmPassword: string

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

  constructor (props?: object) {
    Object.assign(this, props)
  }
}
