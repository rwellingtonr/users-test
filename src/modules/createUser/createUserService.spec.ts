import { UsersRepositoryInMemory } from "../../repositories/in-memory/usersRepositoryInMemory"
import { IUserRepository } from "../../repositories/IUserRepositories"
import { createUserService } from "./createUserService"
/* Unitary Tests */
describe("create user", () => {
	let userRepo: IUserRepository
	let userService: createUserService

	beforeAll(() => {
		userRepo = new UsersRepositoryInMemory()
		userService = new createUserService(userRepo)
	})

	it("Should be possible to create a user", async () => {
		// Should return success

		const userData = {
			email: "wellington-test@test.jest.com",
			name: "Wellington Leardini",
			userName: "rwellingtonr",
		}
		const user = await userService.execute(userData)

		expect(user).toHaveProperty("id")
	})
	it("User already exists", async () => {
		const userData = {
			email: "exist-wellington-test@test.jest.com",
			name: "exist-Wellington Leardini",
			userName: "exist-rwellingtonr",
		}
		await userService.execute(userData) // create once

		// Should return an error
		await expect(userService.execute(userData)).rejects.toEqual(
			new Error("User already exist!")
		)
	})
})
