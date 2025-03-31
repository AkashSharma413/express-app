import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(
  session({
    secret: "sample-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  // res.cookie("name", "express-app", { maxAge: 10000});
  res.cookie("name", "express-app");
  res.send("Hello Express");
});

app.get("/visit", (req, res) => {
  if (req.session.page_views) {
    req.session.page_views++;
    res.send(`You have visited this page ${req.session.page_views} times`);
  } else {
    req.session.page_views = 1;
    res.send("Welcome to this page for the first time!");
  }
});

app.get("/remove-visit", (req, res) => {
  req.session.destroy()
  res.send("Session removed!")
})

app.get("/fetch", (req, res) => {
  console.log(req.cookies);
  res.send("API called");
});

app.get("/remove-cookie", (req, res) => {
  res.clearCookie("name");
  res.send("Cookie cleared");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost${PORT}`);
});
