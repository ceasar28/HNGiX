const express = require("express");
require("dotenv").config();
const PORT = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDb = require("../config/database");
const routes = require("./routes/personRoute");
const notFound = require("./middlewares/errorMiddleware");

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// Apply the JSON body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// to initialise the cors middleware
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use("/", routes);
app.use(notFound);

// app.listen(PORT, () => {
//   console.log(`app is listening on ${PORT}`);
// });
connectDb(process.env.MONGO_CONNECT);
const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on port : ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

// start connection process
start();
