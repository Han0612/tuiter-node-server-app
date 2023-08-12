import express from "express"
import cors from 'cors'
import session from "express-session"
import "dotenv/config"
import HelloController from "./controllers/hello-controller.js"
import UserController from "./users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js"
import AuthController from "./users/auth-controller.js"
import mongoose from "mongoose"

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING)

const app = express()
app.set("trust proxy", 1)

app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000", "https://a5--snazzy-crostata-4443b7.netlify.app"]
    })
)

app.use(
    session({
        secret: "any string",
        resave: false,
        proxy: true,
        saveUninitialized: true,
        cookie: {
            sameSite: "none",
            secure: true,
        },
    })
);
  
app.use(
    session({
        secret: "your-secret-key",
        resave: false,
        saveUninitialized: false,
        store: new session.MemoryStore(),
    })
);
  
app.use(express.json());

TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);
app.listen(process.env.PORT || 4000);