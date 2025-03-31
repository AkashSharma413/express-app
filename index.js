import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "sample-secret",
    resave: false,
    saveUninitialized: false,
  })
);

const users = [];

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  users.push({
    username,
    password,
  });
  res.send(`${username} registered successfully!`);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username == username);
  if (!user || user.password !== password) {
    req.session.destroy();
    return res.send("User Unauthorized!");
  }
  req.session.user = user;
  res.send("User Logged In!");
});

app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.send("Unauthorized!");
  }
  res.send(`${req.session.user.username} authorized!`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost${PORT}`);
});
