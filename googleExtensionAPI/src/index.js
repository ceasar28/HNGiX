import express from "express";
import { config } from "dotenv";
config();
import cors from "cors";
// import morgan from "morgan";
import router from "./routes/videoRoute.js";
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "../src/dbConfig.js";
// import connectDB from "./src/dbConfig.js";
const PORT = 3000;

const app = express();

// Third-party middlewares
app.use(cors());
//app.use(morgan("dev"));

// In-built middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

// custom middlewares
app.use("/api", router);
app.use(errorHandler);

connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
