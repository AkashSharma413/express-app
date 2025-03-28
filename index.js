import express from "express";
import { connectDb } from "./config/db.js";
import { Person } from "./models/Person.js";

const app = express();
const PORT = 3000;
await connectDb();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.use(express.json());

// Save/Add user to database
app.post("/person", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newPerson = new Person({
      name,
      age,
      email,
    });
    await newPerson.save();
    res.send("Person added");
  } catch (error) {
    res.send(error.message)
  }
});

// Update user in database
app.put("/person", async (req, res) => {
  const { _id } = req.body;
  const personData = await Person.findByIdAndUpdate(_id, {
    name: "Akash Sharma",
  });
  console.log(personData);
  res.send("Person updated");
});

// Delete user from database
app.delete("/person/:id", async (req, res) => {
  const { id } = req.params;
  await Person.findByIdAndDelete(id);
  res.send("User deleted");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost${PORT}`);
});
