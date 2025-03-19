import express from 'express';
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello, express")
});

app.get('/error', (req, res) => {
    throw new Error('This is test error')
})

app.use((err, req, res, next) => {
    console.error(err.message)
    res.send('Internal Server Error')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost${PORT}`)
})