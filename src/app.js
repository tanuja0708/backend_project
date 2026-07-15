import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,//few of the options you get for cors 
    credentials: true
}))

// configuration about how many types of data you will get ---> json form--> url 
app.use(express.json({limit: "16kb"})) // configuring json 
app.use(express.urlencoded({extended : true, limit : "16kb"}))  //url configuration---as all special charcacters even spaces have encoding 
app.use(express.static("public")) //its a public assets


app.use(cookieParser()) // reading and accessing cookies of websites -->crud operations

//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)

//http://localhost:8000/api/v1/users/(router)



export { app }