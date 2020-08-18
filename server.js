const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();  //executa a função retornada de express
app.use(express.json());
app.use(cors());    //libera o acesso a diferentes dominios

//iniciando o database
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true, useUnifiedTopology: true }
);
requireDir('./src/models');

/* const Product = mongoose.model('Product'); */

//rotas
app.use('/api', require('./src/routes'));   //use aceita todo tipo de requisição

app.listen(3001); //localhost na porta 3001