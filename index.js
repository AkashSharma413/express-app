import express from 'express';
import { usernameController, searchController} from './controller.js';
const app = express();
const PORT = 3000;

// Define the simple route
app.get("/", (req, res) => {
    res.send("Hello, express")
});

// About route
app.get("/about", (req, res) => {
    res.send("Hello, About")
});

// Contact route
app.get("/contact", (req, res) => {
    res.send("Hello, Contact")
});

// Dynamic route
app.get("/user/:username", usernameController)

// Query string, /search?keyword=express
app.get("/search", searchController)

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost${PORT}`)
})