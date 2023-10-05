const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '..', '..', 'public')
app.use(  express.static(publicPath))

app.listen(3300, () => {
    console.log('servidor en el puerto 3300')
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'home1.html'))
})

