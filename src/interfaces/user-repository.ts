import { UserDTO } from '@/dtos/user-dto'
import { IUser } from './IUser'

export interface IUserRepository {
  createUser({ username, password }: IUser): Promise<void>
  // findUserByUsername(username: string): Promise<UserDTO>
  findUserById(id: string): Promise<UserDTO | null>
  // findAllUsers(): Promise<UserDTO>
}
