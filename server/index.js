const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const port = 8080;

const articleRouter = require("./routes/article");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const userinfoRouter = require("./routes/userinfo");
// const mintRouter = require("./routes/mint");
const signUpRouter = require("./routes/signup");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: "beginners",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/article", articleRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/userinfo", userinfoRouter);
// app.use("/mint", mintRouter);
app.use("/signup", signUpRouter);

app.get("/", (req, res) => {
  res.status(200).send("Beginners");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
