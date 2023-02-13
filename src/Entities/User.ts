import { IsNotEmpty, IsString, IsEmail, IsStrongPassword, IsDateString } from 'class-validator'

export class User {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  private email: string

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  private password: string

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  private confirmPassword: string

  @IsNotEmpty()
  @IsDateString()
  private birthDate: Date

  @IsNotEmpty()
  @IsString()
  private firstName: string

  @IsNotEmpty()
  @IsString()
  private lastName: string

  @IsNotEmpty()
  @IsString()
  private city: string

  @IsNotEmpty()
  @IsString()
  private country: string

  constructor (props?: object) {
    Object.assign(this, props)
  }
}
