const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
