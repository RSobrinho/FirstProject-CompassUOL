export interface ICreateUserDTO {
  _id: string,
  firstName: string,
  lastName: string,
  birthDate: Date,
  city: string,
  country: string,
  email: string,
  password: string,
  confirmPassword: string,
}
