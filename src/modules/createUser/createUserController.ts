import { Request, Response } from "express"
import { createUserService } from "./createUserService"

export class createUserController {
	constructor(private createUser: createUserService) {}

	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { name, email, userName } = req.body

			const user = this.createUser.execute({ name, email, userName })

			return res.status(200).send({ user })
		} catch (err) {
			return res.status(400).send({ err })
		}
	}
}
