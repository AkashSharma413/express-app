import express from 'express';
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello, express")
});

// handle multiple url parameters
app.get('/products/:product/:id([0-9]{5})', (req, res) => {
    const { product, id } = req.params
    res.json({
        product, id
    })
})

// handle invalid route
app.get('*', (req, res) => {
    res.send('Sorry, this is a invalid url!')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost${PORT}`)
})