import { UserDTO } from '@/dtos/user-dto'
import { IUser } from './IUser'

export interface IUserRepository {
  createUser({ username, password }: IUser): Promise<void>
  // findUserByUsername(username: string): Promise<UserDTO>
  findUserById({ id }: IUser): Promise<UserDTO | null>
  // findAllUsers(): Promise<UserDTO>
}
