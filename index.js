import express from "express";
import { connectDb } from "./config/db.js";
import { Person } from "./models/Person.js";

const app = express();
const PORT = 3000;
await connectDb();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.post('/person', express.json(), (req, res) => {
    const {name, email, age} = req.body
    const newPerson = new Person({
        name,
        age,
        email
    })
    newPerson.save();
    res.send("Person added")
})

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost${PORT}`);
});
