import { hash } from 'bcrypt'

export const encrypt = async (data): Promise<string> => {
  data.password = await hash(data.password, 12)

  if (data.confirmPassword) {
    data.confirmPassword = undefined
  }

  return data.password
}
