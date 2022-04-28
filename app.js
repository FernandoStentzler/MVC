const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname)

const mainRoutes = require('./src/routers/main');
app.use('/', mainRoutes);

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');    
});