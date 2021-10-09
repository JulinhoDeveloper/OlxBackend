require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileupload = require('express-fileupload');
const { dbConnection } = require('./database/config');


const apiRoutes = require('./routes/routes');

const server = express();

// Banco de dados
dbConnection();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(fileupload());


server.use(express.static(__dirname+'/public'));

server.use('/', apiRoutes );

server.listen(process.env.PORT, ()=>{
    console.log(`Rodando no endereço: ${process.env.BASE}`);
})