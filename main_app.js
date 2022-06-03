//Script principal. Contiente la creación de servidor con express y la definición de las rutas
 const express = require('express');
 const app = express();
 const puerto = 10000;
 const connection = require('./localdbconnection.js');
 const sconn = require('./serverdbconnection.js');
 const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Creación del motor de vistas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Ruteo
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/public'));

app.use('/', require('./router/router.main'));
app.use('/Tablas', require('./router/router.tablas'));
app.use('/Operaciones', require('./router/router.operaciones'));

//Servidor express
app.listen (puerto, () =>{
    console.log('Servidor escuchando en el puerto ', puerto);
})
