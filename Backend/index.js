import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookroute from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors'
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGODBURI = process.env.MONGODBURI;

 mongoose.connect(MONGODBURI).then(()=>{
     console.log("DataBase Connected!");
   })
.catch((error) => {
    console.log("MongoDB connection error:", error);
  });

app.use("/book",bookroute)
app.use("/user", userRoute);

app.listen(PORT,()=>{
   console.log(`app is listening on port ${PORT}`);
})