import { UserDTO } from '@/dtos/user-dto'
import { IUser } from '@/interfaces'

export interface IUserImplementation {
  createUser({ username, password }: IUser): Promise<void>
  findUserByUsername(username: string): Promise<UserDTO>
  findUserById(id: string): Promise<UserDTO>
  findAllUsers(): Promise<UserDTO[]>
  updateUser({ id, username, password }: IUser): Promise<void>
  deleteUser({ id }: IUser): Promise<void>
}
