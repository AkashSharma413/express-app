import express from 'express';
const app = express();
const PORT = 3000;

// set EJS as the view engine
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    const userName = 'Elon Musk'    
    res.render('index', {userName})
});


app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost${PORT}`)
})