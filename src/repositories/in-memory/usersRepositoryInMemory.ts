import { User } from "../../entities/user"
import { IUserRepository } from "../IUserRepositories"
import { v4 as uuid } from "uuid"

export class UsersRepositoryInMemory implements IUserRepository {
	private user: User[] = []

	async exists(userName: string): Promise<boolean> {
		const user = this.user.some((usr) => usr.userName === userName)
		return user
	}
	async create(user: User): Promise<User> {
		Object.assign(this, {
			id: uuid(),
		})
		this.user.push(user)
		return user
	}
}
