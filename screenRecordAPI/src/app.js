const express = require("express");
const cors = require("cors");

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

app.use((req, res, next) => {
  console.log(req);
});

app.listen(3000, () => {
  console.log("server is up and running");
});
