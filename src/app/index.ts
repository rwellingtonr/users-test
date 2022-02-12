import express, { NextFunction, Request, Response } from "express"
import cors from "cors"
import { createServer } from "http"
import { router } from "../routes/routes"
import "dotenv/config"
// Start the app
const app = express()
//Connections
app.use(cors())
app.use(express.json())
app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof Error) {
		return res.status(400).json({ message: err.message })
	}
	return res.status(500).json({ status: "error", message: `Internal server error: ${err}` })
})

/*Server with http method*/
const serverHttp = createServer(app)
export { serverHttp }
