const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const port = 8080;

const articleRouter = require("./routes/article");
const loginRouter = require("./routes/login");
const mintRouter = require("./routes/mint");
const signUpRouter = require("./routes/signup");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/article", articleRouter);
app.use("/login", loginRouter);
app.use("/mint", mintRouter);
app.use("/signup", signUpRouter);

app.get("/", (req, res) => {
  res.status(200).send("Beginners");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
