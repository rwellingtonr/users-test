import { prisma } from "../../database"
import { User } from "../../entities/user"
import { IUserRepository } from "../IUserRepositories"

export class PrismaUserRepository implements IUserRepository {
	async exists(userName: string): Promise<boolean> {
		const user = await prisma.user.findUnique({
			where: { userName },
		})
		return !!user
	}

	async create(userData: User): Promise<User> {
		const user = await prisma.user.create({
			data: userData,
		})
		return user
	}
}
