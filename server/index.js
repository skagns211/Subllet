const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PATCH"],
  })
);
app.use(cookieParser());
app.use("/", indexRouter);

const port = 4000;

app.listen(port, () => {
  console.log(`server on! http://localhost:${port}`);
});
