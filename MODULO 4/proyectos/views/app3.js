const express = require('express');
const path = require('path')

const app = express();

const publicpath = path.resolve(__dirname, '..', 'public')
app.use( express.static(publicpath))

app.listen(5000, ()=> {
    console.log('servidor en el puerto 5000');
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'home3.html'))
})