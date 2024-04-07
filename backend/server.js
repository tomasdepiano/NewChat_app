import express from "express";
import { chats } from "./data/data.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running successfully!");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  //   console.log(req.params.id);

  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`.yellow.bold));
