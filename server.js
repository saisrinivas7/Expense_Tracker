const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");
const path = require("path");
//config dot env file
dotenv.config();

//connecting to database
connectDb();

// creating a rest object
const app = express(); // all features of express are copied to app object

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//routes
//userRoutes
app.use("/api/v1/users", require("./routes/userRoute"));
//transactionRoutes
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.send(path.join(__dirname, "./client/build/index.html"));
});

//ports
const PORT = process.env.PORT || 5000;

//listening to port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
