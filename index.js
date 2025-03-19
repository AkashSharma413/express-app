import express from 'express';
const app = express();
const PORT = 3000;

app.use('/', (req, res, next) => {
    console.log("Start")
    next()

    res.on('finish', () => {
        console.log("End")
    })
})

app.get("/", (req, res) => {
    console.log("Middle")
    res.send("Hello, express")
});

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost${PORT}`)
})