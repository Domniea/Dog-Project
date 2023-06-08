const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config(); // Angie added .env to hide port and URL and password

//Middleware
app.use(express.json());
app.use(morgan("dev"));

// error handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.use("/dogs", require("./routes/canineRouter"));
app.use("/walkers", require("./routes/walkerRouter"));

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to DB");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is active on port: ${process.env.PORT}`);
});
