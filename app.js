import express from "express"
import cors from 'cors'
import session from "express-session"
import "dotenv/config"
import HelloController from "./controllers/hello-controller.js"
import UserController from "./users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js"
import AuthController from "./users/auth-controller.js"

const app = express()
app.set("trust proxy", 1)

app.use(
    cors({
      credentials: true,
      origin: [process.env.FRONTEND_URL, "https://a5--snazzy-crostata-4443b7.netlify.app/"]
    })
)
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
}
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    }
}
app.use(session(sessionOptions))
  
app.use(
    session(sessionOptions)
)

app.use(express.json())

TuitsController(app)
HelloController(app)
UserController(app)
AuthController(app)

app.listen(process.env.PORT || 4000)    