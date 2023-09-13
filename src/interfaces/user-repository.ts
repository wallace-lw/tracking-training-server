import { UserDTO } from '@/dtos/user-dto'

export interface IUserRepository {
  createUser(username: string, password: string): Promise<void>
  // findUserByUsername(username: string): Promise<UserDTO>
  findUserById(id: string): Promise<UserDTO | null>
  // findAllUsers(): Promise<UserDTO>
}
