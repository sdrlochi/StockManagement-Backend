const express = require("express");

const dotenv = require("dotenv");
const connectDB = require("./config/db");

// const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

// //ceated a route path
// app.use("/api/users", userRoutes);
// app.use("/api/notes", noteRoutes);

//import errorMiddleware file in server.

// app.use(notFound);
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
