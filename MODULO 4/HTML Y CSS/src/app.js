const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public') //corregí lo que tenías: "..", ".." por solo "../public"
app.use(express.static(publicPath))

app.listen(3002, () => {
    console.log('servidor en el puerto 3002')
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html')) // para acceder al home.html 
})
  
app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html')); // para acceder al register.html 
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html')); // para acceder al register.html 
});



