import { Router } from "express"
import { createUserFactory } from "../modules/createUser/createUserFactory"

const router = Router()

router.post("/users", (request, response) => createUserFactory().handle(request, response))

export { router }
