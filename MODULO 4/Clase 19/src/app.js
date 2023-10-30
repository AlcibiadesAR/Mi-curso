const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '..', 'public')
app.use(  express.static(publicPath))

app.listen(7000, () => {
    console.log('servidor en el puerto 7000')
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'))
})

