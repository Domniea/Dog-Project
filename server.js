const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require('cors')
const mongoose = require("mongoose");
const { options } = require("./routes/canineRouter");
mongoose.set("strictQuery", true);
require("dotenv").config(); // Angie added .env to hide port and URL and password

mongoose.connect(`${process.env.MONGO_URL}`, () => {
  console.log("Connected to DB");
});

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://dog-walker-project.herokuapp.com/"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

//Middleware
app.use(express.json());
app.use(morgan("dev"));
// app.use(cors())



//Routes

// app.get('/', (req, res) => {
  //   return res.send('Welcome to the server')
  // })
  
  // console.log(cors())
  
  app.get('/', (req, res) => {
    console.log(req)
    res.send(
      'Welcome to the Server'
      )
    })
    
  app.use("/dogs", require("./routes/canineRouter"));
  app.use("/walkers", require("./routes/walkerRouter"));
    
    
  // error handler
  app.use((err, req, res, next) => {
    console.log(err);
    return res.send({ errMsg: err.message });
  });
app.listen(process.env.PORT, () => {
  console.log(`Server is active on port: ${process.env.PORT}`);
});
