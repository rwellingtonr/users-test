import { User } from "../../entities/user"
import { IUserRepository } from "../IUserRepositories"
import { v4 as uuid } from "uuid"

export class UsersRepositoryInMemory implements IUserRepository {
	private users: User[] = []

	async exists(userName: string): Promise<boolean> {
		const user = this.users.some((usr) => usr.userName === userName)
		return user
	}
	async create(user: User): Promise<User> {
		Object.assign(user, {
			id: uuid(),
		})

		this.users.push(user)
		return user
	}
}
