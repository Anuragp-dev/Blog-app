import express from "express";
import mongoose from "mongoose";
import cors from  "cors";
import cookieParser from "cookie-parser";
import { userRouter } from "./Routes/userRoutes.js";


const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api",userRouter);


mongoose.connect("mongodb+srv://abhijithp327:12345@cluster0.dtz3tny.mongodb.net/blogs?retryWrites=true&w=majority",
{
    useNewUrlParser:true, 
    useUnifiedTopology:true,
}
).then(()=> {
console.log("database connected");
})
.catch(()=> {
console.log("something bad happend");
});




app.listen(4001, () => {
    console.log("Server is running");
})
