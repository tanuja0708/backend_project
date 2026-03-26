import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// configuration about how many types of data you will get ---> json form--> url 
app.use(express.json({limit: "16kb"})) // configuring json 
app.use(express.urlencoded({extended : true, limit : "16kb"}))  //url configuration
app.use(express.static("public"))

app.use(cookieParser()) // reading and accessing cookies of websites



export { app }