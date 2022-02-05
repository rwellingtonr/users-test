import { PrismaUserRepository } from "../../repositories/prisma/prismaUsersRepository"
import { createUserController } from "./createUserController"
import { createUserService } from "./createUserService"

export const createUserFactory = (): createUserController => {
	const userRepository = new PrismaUserRepository()
	const createUser = new createUserService(userRepository)
	const userController = new createUserController(createUser)
	return userController
}
