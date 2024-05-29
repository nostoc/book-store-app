import express from "express";
import { PORT, MONGO_URL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";

const app = express();

//configuring middleware

app.use(express.json());

//middleware for handling CORS policy
// option 1 : Allow All origins with Default cors(*)
// not the best way

//app.use(cors());

//option 2: Allow custom origins
// the better way
app.use(
  cors({
    origin: "http://localhost:5555/",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome to MERN Stack Bookstore Application ");
});

app.use("/books", bookRoute);

mongoose.connect(MONGO_URL).then(() => {
  try {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
});
