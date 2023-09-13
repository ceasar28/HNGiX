const express = require("express");
require("dotenv").config();
const PORT = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDb = require("../config/database");
const route = require("./routes/route");
const notFound = require("./middlewares/errorMiddleware");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // to initialise the cors middleware

app.use("/", route);
app.use(notFound);

// app.listen(PORT, () => {
//   console.log(`app is listening on ${PORT}`);
// });

const start = async () => {
  try {
    await connectDb(process.env.MONGO_CONNECT);
    app.listen(PORT, () => {
      console.log(`Server is listening on port : ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

// start connection process
start();
