require("dotenv").config({});
const express = require("express");
const cors = require("cors");
const http = require("http"); // Import HTTP module
const socketIo = require("socket.io"); // Import Socket.IO

const PORT = process.env.PORT || 8000;
const app = express();
const { connectDb } = require("./configs/dbConfig");
connectDb();

// Create an HTTP server and pass the Express app to it
const server = http.createServer(app);

// Initialize Socket.IO with the HTTP server
const io = socketIo(server, {
  cors: {
    origin: "*", // Allow all origins (adjust as needed)
    methods: ["GET", "POST"],
  },
});

// Import and set up the Socket.IO event handlers
require("./socket/socketIo")(io);

// json request => parse -> request.body attach
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/api", require("./routes"));

app.use("*", (req, res) => {
  res.status(404).json({ message: "path not found" });
});

// Use the HTTP server to listen on the specified port
server.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});
