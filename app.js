const express = require('express');
const app = express();
const port = 3000;

app.set('view-engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.get('/success', (req, res) => {
    res.render('success.ejs')
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})