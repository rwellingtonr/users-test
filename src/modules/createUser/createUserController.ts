import { Request, Response } from "express"
import { createUserService } from "./createUserService"
import { IUser } from "./IUserInterface"

export class createUserController {
	constructor(private createUser: createUserService) {}

	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { name, email, userName }: IUser = req.body

			const user = await this.createUser.execute({ name, email, userName })

			return res.status(201).json({ ...user })
		} catch (err) {
			return res.status(400).json({ err })
		}
	}
}
