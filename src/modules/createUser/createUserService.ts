import { User } from "../../entities/user"
import { IUserRepository } from "../../repositories/IUserRepositories"
import { IUser } from "./IUserInterface"

export class createUserService {
	constructor(private userRepository: IUserRepository) {}

	async execute({ name, email, userName }: IUser) {
		const userExists = await this.userRepository.exists(userName)

		if (userExists) throw new Error("User already exist!")

		const createUser = User.create({ name, email, userName })
		const user = await this.userRepository.create(createUser)
		return user
	}
}
