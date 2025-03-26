const express = require('express');
const recipes = require('./data/recipes.js');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.listen(port, () => {
    console.log('Server in ascolto sulla porta ' + port);
});