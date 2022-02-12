/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { serverHttp } from "../../app"
import request from "supertest"

describe("Create user controller", () => {
	it("Should be able to create a new user", async () => {
		const res = await request(serverHttp).post("/users").send({
			name: "test integration",
			email: "test@test.jest.com",
			userName: "testIntegration",
		})

		expect(res.status).toBe(201)
		expect(res.body).toHaveProperty("id")
	})
	it("Should'n create a new user", async () => {
		const res = await request(serverHttp).post("/users").send({
			name: "test integration",
			userName: "testIntegration",
		})

		expect(res.status).toBe(400)
	})
})
