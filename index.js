import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;

app.use(cookieParser());

app.get("/", (req, res) => {
  // res.cookie("name", "express-app", { maxAge: 10000});
  res.cookie("name", "express-app");
  res.send("Hello Express");
});

app.get("/fetch", (req, res) => {
  console.log(req.cookies);
  res.send("API called")
})

app.get("/remove-cookie", (req, res) => {
  res.clearCookie("name")
  res.send("Cookie cleared")  
})

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost${PORT}`);
});
