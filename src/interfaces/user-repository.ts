import { UserDTO } from '@/dtos/user-dto'

export interface IUserRepository {
  findUserById(id: string): Promise<UserDTO | null>
}
