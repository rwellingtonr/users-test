import { User } from "../entities/user"

export interface IUserRepository {
	create(user: User): Promise<User>
	exists(userName: string): Promise<boolean>
}
