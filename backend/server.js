import express from "express";
import { chats } from "./data/data.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouters from "./routes/userRoutes.js";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import chatRoutes from "./routes/chatRoutes.js";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running successfully!");
});

app.use("/api/user", userRouters);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`.yellow.bold));
