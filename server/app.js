const app = require("express")();
const httpServer = require("http").createServer(app);
const cors = require("cors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const io = require("socket.io")(httpServer, {
	cors: {
		origin: process.env.ORIGIN_CLIENT,
		methods: ["GET", "POST"],
	},
});

io.on("connection", socket => {
	console.log("User connected");
	socket.on("disconnect", () => console.log("User disconnected"));

	socket.on("chat message", msg => {
		console.log(msg);
		socket.broadcast.emit(msg);
		io.emit("chat message", msg);
	});
});

httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
