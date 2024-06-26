require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const authRouter = require("./Routers/authRouter");
const feeRouter = require("./Routers/feesRouter");
const defendersRouter = require("./Routers/defenderRouter");
const errorMiddleware = require("./Middlewares/errorMiddleware");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:5173",
      "https://soldiers-hub-project-1itgohixm-botsyundenys.vercel.app",
      "https://soldiers-hub-project.vercel.app",
    ],
  })
);
app.use("/auth", authRouter);
app.use("/fee", feeRouter);
app.use("/defender", defendersRouter);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server was started on PORT = ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
