const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public') 
app.use(express.static(publicPath))

app.listen(3012, () => {
    console.log('servidor en el puerto 3012')
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html')) // para acceder al index.html 
})
  
app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html')); // para acceder al register.html 
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html')); // para acceder al register.html 
});



