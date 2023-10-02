const express = require("express");
const cors = require("cors");
const recordRoute = require("./routes/recordRoute");
const app = express();

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

app.use("/record", recordRoute);

app.listen(3000, () => {
  console.log("server is up and running");
});
