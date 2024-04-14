import express from "express";
import { chats } from "./data/data.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouters from "./routes/userRoutes.js";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoute.js";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
dotenv.config();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running successfully!");
});

app.use("/api/user", userRouters);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

const socketPORT = process.env.SOCKETPORT || 4001;
const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`.yellow.bold));

const io = new Server(httpServer, {
  pingTimeout: 60000,
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`User ${socket.id} connected`);

  socket.on("message", (data) => {
    console.log(data);
    io.emit("message", `${data}`);
  });
});

httpServer.listen(socketPORT, () => {
  console.log(`Socket server is listening on ${socketPORT}`);
});
