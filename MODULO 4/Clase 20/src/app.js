const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public') //corregí lo que tenías: "..", ".." por solo "../public"
app.use(express.static(publicPath))

app.listen(3001, () => {
    console.log('servidor en el puerto 3001')
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html')) // para acceder al home.html 
})


