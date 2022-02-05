export class User {
	id?: string
	name: string
	userName: string
	email: string

	private constructor(userData: User) {
		return Object.assign(this, userData)
	}

	static create(userData: User): User {
		const user = new User(userData)
		return user
	}
}
