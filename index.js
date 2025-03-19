import express from 'express';
const app = express();
const PORT = 3000;

app.use('/public', express.static('public'))
app.use('/images', express.static('images'))

app.get("/", (req, res) => {
    res.send('Hello Express')
});


app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost${PORT}`)
})