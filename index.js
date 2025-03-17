import express from 'express';
import router from './route.js';
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello, express")
});

app.use('/user', router);

app.use(express.json());

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    res.send({
        message: `User ${name} with email ${email} is created successfully!`
    })
})

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    res.json({
        message: `User ${userId} is updated with ${name}, ${email}`
    })
})

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id
    res.json({
        message: `User with id ${userId} is deleted successfully!`
    })
})


app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost${PORT}`)
})