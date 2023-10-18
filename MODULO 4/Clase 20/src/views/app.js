const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '..', '..', 'public')
app.use(  express.static(publicPath))

app.listen(7100, () => {
    console.log('servidor en el puerto 7100')
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'home.html'))
})

