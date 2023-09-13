const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");

const route = require("./routes/route");

const app = express();

app.use("/", route);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
