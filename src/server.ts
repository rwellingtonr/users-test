import { serverHttp } from "./app"

const { PORT } = process.env

serverHttp.listen(PORT, (): void => {
	console.log(`Running on port: ${PORT}`)
})
